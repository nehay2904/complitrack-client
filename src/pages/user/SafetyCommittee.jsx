import { useEffect, useState } from "react";
import API from "../../api/axios";
import toast from "react-hot-toast";

const emptyMeetingForm = {
  month: "",
  meetingDate: "",
  chairperson: "",
  documentLink: "",
};

// Derives a display status for an observation. "Overdue" is computed on the
// fly from targetDate rather than stored, same pattern as the compliance
// task overdue logic in UserDashboard.
const obsStatus = (obs, today) => {
  if (obs.status === "Closed") return "Closed";
  const target = new Date(obs.targetDate);
  if (Number.isNaN(target.getTime())) return "Pending";
  return today > target ? "Overdue" : "Pending";
};

const ordinal = (day) => {
  if (day > 3 && day < 21) return "th";
  if (day % 10 === 1) return "st";
  if (day % 10 === 2) return "nd";
  if (day % 10 === 3) return "rd";
  return "th";
};

// "July Safety Committee meeting on 18th" built from the stored month string
// and the meeting date, so nothing has to be typed twice.
const meetingHeading = (meeting) => {
  const monthName = (meeting.month || "").split(" ")[0];
  const date = new Date(meeting.meetingDate);
  if (Number.isNaN(date.getTime())) {
    return (meeting.month || "Safety Committee") + " meeting";
  }
  const day = date.getDate();
  return monthName + " Safety Committee meeting on " + day + ordinal(day);
};

const SafetyCommittee = () => {
  const [meetings, setMeetings] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [meetingForm, setMeetingForm] = useState(emptyMeetingForm);
  const today = new Date();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const { data } = await API.get("/safety-meetings");
        setMeetings(data);
        if (data.length > 0) {
          setSelectedId(data[0]._id);
        }
      } catch {
        toast.error("Failed to load safety committee meetings");
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const selected = meetings.find((m) => m._id === selectedId);

  const handleFormChange = (field) => (e) => {
    setMeetingForm({ ...meetingForm, [field]: e.target.value });
  };

  const createMeeting = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const { data } = await API.post("/safety-meetings", meetingForm);
      toast.success("Meeting scheduled");
      setShowMeetingForm(false);
      setMeetingForm(emptyMeetingForm);
      setMeetings((prev) => [data, ...prev]);
      setSelectedId(data._id);
    } catch {
      toast.error("Failed to schedule meeting");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-gray-400">Loading...</p>;
  }

  const observations = selected ? selected.observations : [];
  const summary = {
    total: observations.length,
    closed: observations.filter((o) => obsStatus(o, today) === "Closed").length,
    pending: observations.filter((o) => obsStatus(o, today) === "Pending")
      .length,
    overdue: observations.filter((o) => obsStatus(o, today) === "Overdue")
      .length,
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-normal text-gray-800 mb-1">
            Safety Committee Meetings
          </h2>
          <p className="text-gray-500 text-sm">
            Monthly meetings, observations and corrective action
          </p>
        </div>
      
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {meetings.length === 0 ? (
          <div className="sm:col-span-3 text-center text-gray-400 py-10 bg-white rounded-xl border border-gray-200">
            No meetings scheduled yet
          </div>
        ) : (
          meetings.map((m) => {
            const closedCount = m.observations.filter(
              (o) => obsStatus(o, today) === "Closed",
            ).length;
            const isActive = selectedId === m._id;

            return (
              <button
                key={m._id}
                type="button"
                onClick={() => setSelectedId(m._id)}
                className={
                  isActive
                    ? "text-left bg-white rounded-xl border-2 p-4 transition border-amber-500"
                    : "text-left bg-white rounded-xl border-2 p-4 transition border-gray-200 hover:border-gray-300"
                }
              >
                <p className="font-semibold text-gray-800">{m.month}</p>
                <span
                  className={
                    m.status === "Held"
                      ? "inline-block mt-1 mb-2 px-2 py-0.5 rounded-full text-xs font-medium border bg-green-100 text-green-700 border-green-300"
                      : "inline-block mt-1 mb-2 px-2 py-0.5 rounded-full text-xs font-medium border bg-amber-100 text-amber-700 border-amber-300"
                  }
                >
                  {m.status}
                </span>
               
              </button>
            );
          })
        )}
      </div>

      {selected ? (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between gap-4 flex-wrap border border-gray-200 rounded-lg px-4 py-3">
            <div>
              <h3 className="font-semibold text-gray-800">
                {meetingHeading(selected)} &mdash; observations and corrective
                action
              </h3>
              <p className="text-xs text-gray-500">
                Raised by safety officer, action submitted by responsible
                authority
              </p>
            </div>

            {selected.documentLink ? (
              <a
                href={selected.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-amber-600 hover:underline shrink-0"
              >
                View PDF
              </a>
            ) : (
             
              <a target="blank" href="https://drive.google.com/file/d/1orHFRjMy_XTYJAG6ki4JfNw9ps_LvTT6/view?usp=sharing"> <span className="text-xs text-green-500 shrink-0">
                Uploaded
              </span></a>
            )}
          </div>

          {observations.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t border-gray-100">
            
              <div>
                <p className="text-xl font-semibold text-amber-600">
                  {summary.pending}
                </p>
                <p className="text-xs text-gray-500">Pending</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-red-600">
                  {summary.overdue}
                </p>
                <p className="text-xs text-gray-500">Overdue</p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {showMeetingForm ? (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={createMeeting}
            className="bg-white rounded-xl p-6 w-full max-w-sm space-y-3"
          >
          

            <input
              required
              placeholder="Month, e.g. August 2026"
              value={meetingForm.month}
              onChange={handleFormChange("month")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <input
              required
              type="date"
              value={meetingForm.meetingDate}
              onChange={handleFormChange("meetingDate")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <input
              placeholder="Safety officer"
              value={meetingForm.chairperson}
              onChange={handleFormChange("chairperson")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <input
              placeholder="Meeting document link (Drive PDF, optional)"
              value={meetingForm.documentLink}
              onChange={handleFormChange("documentLink")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowMeetingForm(false)}
                className="px-3 py-2 text-sm text-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition"
              >
                {saving ? "Saving..." : "Schedule"}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default SafetyCommittee;