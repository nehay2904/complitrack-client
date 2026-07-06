import { useEffect, useState } from "react";
import API from "../../api/axios";
import toast from "react-hot-toast";

const severityColors = {
  High: "bg-red-100 text-red-700 border-red-300",
  Medium: "bg-amber-100 text-amber-700 border-amber-300",
  Low: "bg-green-100 text-green-700 border-green-300",
};

const statusStyles = {
  Closed: "bg-green-100 text-green-700 border-green-300",
  Pending: "bg-amber-100 text-amber-700 border-amber-300",
  Overdue: "bg-red-100 text-red-700 border-red-300",
};

const emptyMeetingForm = { month: "", meetingDate: "", chairperson: "" };
const emptyObsForm = {
  description: "",
  location: "",
  severity: "Medium",
  assignedTo: "",
  targetDate: "",
  raisedBy: "",
};

// Derives a display status for an observation. "Overdue" is computed on the
// fly from targetDate rather than stored, same pattern as the compliance
// task overdue logic in UserDashboard.
const obsStatus = (obs, today) => {
  if (obs.status === "Closed") return "Closed";
  const target = new Date(obs.targetDate);
  if (!isNaN(target) && today > target) return "Overdue";
  return "Pending";
};

const SafetyCommittee = () => {
  const [meetings, setMeetings] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [showObsForm, setShowObsForm] = useState(false);
  const [meetingForm, setMeetingForm] = useState(emptyMeetingForm);
  const [obsForm, setObsForm] = useState(emptyObsForm);
  const [editingObsId, setEditingObsId] = useState(null);
  const [solutionDraft, setSolutionDraft] = useState("");

  const today = new Date();

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const { data } = await API.get("/safety-meetings");
      setMeetings(data);
      setSelectedId((prev) => prev || (data[0] && data[0]._id));
    } catch {
      toast.error("Failed to load safety committee meetings");
    } finally {
      setLoading(false);
    }
  };

  const selected = meetings.find((m) => m._id === selectedId);

  const createMeeting = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/safety-meetings", meetingForm);
      toast.success("Meeting scheduled");
      setShowMeetingForm(false);
      setMeetingForm(emptyMeetingForm);
      setMeetings((prev) => [data, ...prev]);
      setSelectedId(data._id);
    } catch {
      toast.error("Failed to schedule meeting");
    }
  };

  const addObservation = async (e) => {
    e.preventDefault();
    if (!selectedId) return;
    try {
      const { data } = await API.post(
        `/safety-meetings/${selectedId}/observations`,
        obsForm,
      );
      toast.success("Observation added");
      setShowObsForm(false);
      setObsForm(emptyObsForm);
      setMeetings((prev) => prev.map((m) => (m._id === data._id ? data : m)));
    } catch {
      toast.error("Failed to add observation");
    }
  };

  const submitSolution = async (obsId) => {
    if (!solutionDraft.trim()) {
      toast.error("Enter the action taken before saving");
      return;
    }
    try {
      const { data } = await API.patch(
        `/safety-meetings/${selectedId}/observations/${obsId}`,
        { solution: solutionDraft, status: "Closed" },
      );
      toast.success("Solution submitted");
      setEditingObsId(null);
      setSolutionDraft("");
      setMeetings((prev) => prev.map((m) => (m._id === data._id ? data : m)));
    } catch {
      toast.error("Failed to submit solution");
    }
  };

  if (loading) return <p className="text-gray-400">Loading...</p>;

  const summary = selected
    ? {
        total: selected.observations.length,
        closed: selected.observations.filter(
          (o) => obsStatus(o, today) === "Closed",
        ).length,
        pending: selected.observations.filter(
          (o) => obsStatus(o, today) === "Pending",
        ).length,
        overdue: selected.observations.filter(
          (o) => obsStatus(o, today) === "Overdue",
        ).length,
      }
    : null;

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
        <button
          onClick={() => setShowMeetingForm(true)}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition"
        >
          + Schedule new meeting
        </button>
      </div>

      {/* Meeting cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {meetings.length === 0 ? (
          <div className="sm:col-span-3 text-center text-gray-400 py-10 bg-white rounded-xl border border-gray-200">
            No meetings scheduled yet
          </div>
        ) : (
          meetings.map((m) => (
            <button
              key={m._id}
              onClick={() => setSelectedId(m._id)}
              className={`text-left bg-white rounded-xl border-2 p-4 transition ${
                selectedId === m._id
                  ? "border-amber-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <p className="font-semibold text-gray-800">{m.month}</p>
              <span
                className={`inline-block mt-1 mb-2 px-2 py-0.5 rounded-full text-xs font-medium border ${
                  m.status === "Held"
                    ? "bg-green-100 text-green-700 border-green-300"
                    : "bg-amber-100 text-amber-700 border-amber-300"
                }`}
              >
                {m.status}
              </span>
              <p className="text-xs text-gray-500">
                {m.observations.length} observations raised
              </p>
              <p className="text-xs text-gray-500">
                {m.observations.filter((o) => obsStatus(o, today) === "Closed").length}{" "}
                closed
              </p>
            </button>
          ))
        )}
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <h3 className="font-semibold text-gray-800">
                {selected.month} meeting — observations and corrective action
              </h3>
              <p className="text-xs text-gray-500">
                Raised by safety officer, action submitted by responsible authority
              </p>
            </div>
            <button
              onClick={() => setShowObsForm(true)}
              className="px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white text-xs font-semibold rounded-lg transition"
            >
              + Add observation
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 text-xs border-b border-gray-200">
                  <th className="pb-2 pr-3">Observation</th>
                  <th className="pb-2 pr-3">Location</th>
                  <th className="pb-2 pr-3">Severity</th>
                  <th className="pb-2 pr-3">Assigned to</th>
                  <th className="pb-2 pr-3">Target date</th>
                  <th className="pb-2 pr-3">Status</th>
                  <th className="pb-2">Action / solution</th>
                </tr>
              </thead>
              <tbody>
                {selected.observations.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-400">
                      No observations logged for this meeting yet
                    </td>
                  </tr>
                ) : (
                  selected.observations.map((obs) => {
                    const st = obsStatus(obs, today);
                    return (
                      <tr key={obs._id} className="border-b border-gray-100 align-top">
                        <td className="py-3 pr-3 max-w-xs">{obs.description}</td>
                        <td className="py-3 pr-3 text-gray-600">{obs.location}</td>
                        <td className="py-3 pr-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium border ${severityColors[obs.severity]}`}
                          >
                            {obs.severity}
                          </span>
                        </td>
                        <td className="py-3 pr-3 text-gray-600">{obs.assignedTo}</td>
                        <td className="py-3 pr-3 text-gray-600">
                          {obs.targetDate
                            ? new Date(obs.targetDate).toLocaleDateString()
                            : "—"}
                        </td>
                        <td className="py-3 pr-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium border ${statusStyles[st]}`}
                          >
                            {st}
                          </span>
                        </td>
                        <td className="py-3 min-w-[180px]">
                          {obs.status === "Closed" ? (
                            <span className="text-gray-600 text-xs">
                              {obs.solution}
                            </span>
                          ) : editingObsId === obs._id ? (
                            <div className="flex gap-2">
                              <input
                                autoFocus
                                value={solutionDraft}
                                onChange={(e) => setSolutionDraft(e.target.value)}
                                placeholder="Action taken..."
                                className="border border-gray-300 rounded px-2 py-1 text-xs w-full"
                              />
                              <button
                                onClick={() => submitSolution(obs._id)}
                                className="text-xs px-2 py-1 bg-green-600 text-white rounded whitespace-nowrap"
                              >
                                Save
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setEditingObsId(obs._id);
                                setSolutionDraft(obs.solution || "");
                              }}
                              className="text-xs text-blue-600 hover:underline"
                            >
                              Submit solution
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {summary && selected.observations.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xl font-semibold text-gray-800">{summary.total}</p>
                <p className="text-xs text-gray-500">Total observations</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-green-600">{summary.closed}</p>
                <p className="text-xs text-gray-500">Closed</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-amber-600">{summary.pending}</p>
                <p className="text-xs text-gray-500">Pending</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-red-600">{summary.overdue}</p>
                <p className="text-xs text-gray-500">Overdue</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Schedule meeting modal */}
      {showMeetingForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={createMeeting}
            className="bg-white rounded-xl p-6 w-full max-w-sm space-y-3"
          >
            <h3 className="font-semibold text-gray-800 mb-2">Schedule new meeting</h3>
            <input
              required
              placeholder="Month, e.g. August 2026"
              value={meetingForm.month}
              onChange={(e) => setMeetingForm({ ...meetingForm, month: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <input
              required
              type="date"
              value={meetingForm.meetingDate}
              onChange={(e) =>
                setMeetingForm({ ...meetingForm, meetingDate: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <input
              placeholder="Safety officer"
              value={meetingForm.chairperson}
              onChange={(e) =>
                setMeetingForm({ ...meetingForm, chairperson: e.target.value })
              }
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
                className="px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-lg"
              >
                Schedule
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add observation modal */}
      {showObsForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={addObservation}
            className="bg-white rounded-xl p-6 w-full max-w-md space-y-3"
          >
            <h3 className="font-semibold text-gray-800 mb-2">Add observation</h3>
            <textarea
              required
              placeholder="Observation description"
              value={obsForm.description}
              onChange={(e) => setObsForm({ ...obsForm, description: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              rows={2}
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Location"
                value={obsForm.location}
                onChange={(e) => setObsForm({ ...obsForm, location: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <select
                value={obsForm.severity}
                onChange={(e) => setObsForm({ ...obsForm, severity: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <input
                required
                placeholder="Assigned to"
                value={obsForm.assignedTo}
                onChange={(e) => setObsForm({ ...obsForm, assignedTo: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <input
                required
                type="date"
                value={obsForm.targetDate}
                onChange={(e) => setObsForm({ ...obsForm, targetDate: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <input
              placeholder="Raised by (safety officer)"
              value={obsForm.raisedBy}
              onChange={(e) => setObsForm({ ...obsForm, raisedBy: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowObsForm(false)}
                className="px-3 py-2 text-sm text-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SafetyCommittee;
