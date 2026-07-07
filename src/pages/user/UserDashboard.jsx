import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Notices from "./Notices";
import Returns from "./Returns";
import Forms from "./Forms";
import Records from "./Records";
import jindalLogo from "../../assets/jindal-logo.png";
import MyRecords from "./MyRecords";
import RulesRegulations from "./RulesRegulations";
import InternalMineDocuments from "./Internal Mine Documents";
import SafetyCommittee from "./SafetyCommittee";

const statusColors = {
  Pending: "bg-amber-500 text-white border-amber-600",
  Completed: "bg-green-600 text-white border-green-700",
};

// Sidebar nav config — add/remove tabs here only, markup below reads from this list
const NAV_ITEMS = [
  { key: "tasks", label: "My Tasks", icon: "📋" },
  { key: "myrecords", label: "Update my Records", icon: "🗂" },
   { key: "safety-committee", label: "Safety Committee", icon: "🦺", isNew: true },
  { key: "rules", label: "Rules & Regulations", icon: "📜" },
  { key: "notices", label: "Notices", icon: "📢" },
  { key: "returns", label: "Returns", icon: "📊" },
  { key: "forms", label: "Forms", icon: "📄" },
  { key: "records", label: "Statutory Records", icon: "🗂" },
   { key: "internal-mine-documents", label: "COPs/SOPs", icon: "📄" },
];

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [compliances, setCompliances] = useState([]);
  const [mySafetyTasks, setMySafetyTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();

  const getTabFromPath = () => {
    const path = location.pathname.split("/dashboard/")[1];
    return path || "tasks";
  };
  const [activeTab, setActiveTab] = useState(getTabFromPath());

  useEffect(() => {
    setActiveTab(getTabFromPath());
  }, [location.pathname]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await API.get("/compliances");
      setCompliances(data);
    } catch {
      toast.error("Failed to load");
    } finally {
      setLoading(false);
    }
    try {
      const { data } = await API.get("/safety-meetings/observations/mine");
      setMySafetyTasks(data);
    } catch {
      // non-fatal, just skip the section
    }
  };

  const submitSafetyTaskSolution = async (task, solution) => {
    if (!solution.trim()) {
      toast.error("Enter the action taken before saving");
      return;
    }
    try {
      await API.patch(
        `/safety-meetings/${task.meetingId}/observations/${task._id}`,
        { solution, status: "Closed" },
      );
      toast.success("Solution submitted");
      fetchData();
    } catch {
      toast.error("Failed to submit solution");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/compliances/${id}/status`, { status });
      toast.success("Status updated!");
      fetchData();
    } catch {
      toast.error("Failed");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const goToTab = (key) => {
    navigate(key === "tasks" ? "/dashboard" : `/dashboard/${key}`);
  };

  const today = new Date();

  const counts = {
    all: compliances.length,
    pending: compliances.filter((c) => c.status === "Pending").length,
    completed: compliances.filter((c) => c.status === "Completed").length,
    overdue: compliances.filter((c) => {
      const due = new Date(c.dueDate);
      return !isNaN(due) && today > due && c.status !== "Completed";
    }).length,
  };

  const filtered = compliances.filter((c) => {
    if (filter === "pending") return c.status === "Pending";
    if (filter === "completed") return c.status === "Completed";
    if (filter === "overdue") {
      const due = new Date(c.dueDate);
      return !isNaN(due) && today > due && c.status !== "Completed";
    }
    return true;
  });

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
   <aside className="w-64 bg-green-900 text-white flex flex-col sticky top-0 h-screen shrink-0">
  <div className="flex items-center gap-3 px-5 py-5 border-b border-green-800">
    <img
      src={jindalLogo}
      alt="Jindal Power"
      className="w-9 h-9 object-contain"
    />
    <div>
      <h1 className="font-semibold leading-none">CompliTrack</h1>
      <p className="text-green-300 text-xs mt-1">JPL Mines</p>
    </div>
  </div>

  <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
    {NAV_ITEMS.map((tab) => (
      <button
        key={tab.key}
        onClick={() => goToTab(tab.key)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
          activeTab === tab.key
            ? "bg-green-800 text-white border-l-4 border-amber-500 pl-2"
            : "text-green-100 hover:bg-green-800/60 hover:text-white"
        }`}
      >
        <span>{tab.icon}</span>
        <span className="flex-1 text-left">{tab.label}</span>
        {tab.key === "tasks" && counts.pending + counts.overdue > 0 && (
          <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-red-600 text-white text-xs font-bold rounded-full">
            {counts.pending + counts.overdue}
          </span>
        )}
        {tab.isNew && (
          <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-bold rounded">
            NEW
          </span>
        )}
      </button>
    ))}
  </nav>

  <div className="border-t border-green-800 px-5 py-4">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
        {user?.name?.charAt(0)}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium truncate">{user?.name}</p>
        <p className="text-green-300 text-xs truncate">{user?.dept}</p>
      </div>
    </div>
    <button
      onClick={handleLogout}
      className="w-full px-3 py-2 bg-green-800 hover:bg-red-600 text-green-100 text-sm rounded-lg transition"
    >
      Logout
    </button>
  </div>
</aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === "tasks" && (
          <>
            <h2 className="text-2xl font-normal text-gray-800 mb-1">
              Welcome, {user?.name} 👋
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Your assigned compliance tasks
            </p>

            <div className="space-y-3">
              {filtered.length === 0 ? (
                <div className="text-center text-black-400 py-20 bg-white rounded-xl border border-gray-200">
                  No tasks found
                </div>
              ) : (
                filtered.map((c) => {
                  const due = new Date(c.dueDate);
                  const isOverdue =
                    !isNaN(due) && today > due && c.status !== "Completed";
                  return (
                    <div
                      key={c._id}
                      className={`bg-white rounded-xl border-2 p-5 shadow-sm ${isOverdue ? "border-l-4 border-l-red-600 border-red-300" : c.status === "Completed" ? "border-l-4 border-l-green-600 border-green-300" : "border-gray-300"}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="text-blue-600 font-mono text-xs font-bold">
                              {c.complianceId}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-medium border ${statusColors[c.status]}`}
                            >
                              {c.status}
                            </span>
                            {isOverdue && (
                              <span className="text-red-600 text-xs font-bold">
                                OVERDUE
                              </span>
                            )}
                          </div>
                          <h3 className="text-black-800 font-medium mb-1">
                            {c.title}
                          </h3>
                          {c.detail && (
                            <p className="text-black-500 text-xs mb-2 line-clamp-2">
                              {c.detail}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-3 text-xs text-black-600 mt-2">
                            {c.dueDate && <span>📅 Due: {c.dueDate}</span>}
                            {c.alertDate && (
                              <span>🔔 Alert: {c.alertDate}</span>
                            )}
                            {c.recurrence && <span>🔁 {c.recurrence}</span>}
                            {c.submissionAuthority && (
                              <span>🏛 {c.submissionAuthority}</span>
                            )}
                            {c.driveLink && (
                              <span
                                onClick={() => window.open(c.driveLink, "_blank")}
                                className="text-blue-600 hover:underline font-medium cursor-pointer"
                              >
                                📎 View Document
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 min-w-fit">
                          {c.status !== "Completed" && (
                            <button
                              onClick={() => updateStatus(c._id, "Completed")}
                              className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition whitespace-nowrap shadow-sm"
                            >
                              Mark Done ✓
                            </button>
                          )}
                          {c.status === "Completed" && (
                            <span className="px-3 py-2 bg-green-50 text-green-700 border border-green-300 text-xs rounded-lg text-center font-medium">
                              ✅ Completed
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {mySafetyTasks.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-normal text-gray-800 mb-1">
                  My Safety Committee Tasks
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Observations assigned to you from safety committee meetings
                </p>
                <div className="space-y-3">
                  {mySafetyTasks.map((t) => (
                    <SafetyTaskCard
                      key={t._id}
                      task={t}
                      onSubmit={submitSafetyTaskSolution}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        {activeTab === "internal-mine-documents" && <InternalMineDocuments />}
        {activeTab === "rules" && <RulesRegulations />}
        {activeTab === "notices" && <Notices />}
        {activeTab === "returns" && <Returns />}
        {activeTab === "forms" && <Forms />}
        {activeTab === "records" && <Records />}
        {activeTab === "myrecords" && <MyRecords />}
        {activeTab === "safety-committee" && <SafetyCommittee />}
      </main>
    </div>
  );
};

const safetySeverityColors = {
  High: "bg-red-100 text-red-700 border-red-300",
  Medium: "bg-amber-100 text-amber-700 border-amber-300",
  Low: "bg-green-100 text-green-700 border-green-300",
};

const SafetyTaskCard = ({ task, onSubmit }) => {
  const [editing, setEditing] = useState(false);
  const [solution, setSolution] = useState(task.solution || "");
  const today = new Date();
  const target = new Date(task.targetDate);
  const isOverdue =
    task.status !== "Closed" && !isNaN(target) && today > target;

  return (
    <div
      className={`bg-white rounded-xl border-2 p-5 shadow-sm ${
        isOverdue
          ? "border-l-4 border-l-red-600 border-red-300"
          : task.status === "Closed"
          ? "border-l-4 border-l-green-600 border-green-300"
          : "border-gray-300"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-blue-600 font-mono text-xs font-bold">
              {task.month}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium border ${safetySeverityColors[task.severity]}`}
            >
              {task.severity}
            </span>
            {isOverdue && (
              <span className="text-red-600 text-xs font-bold">OVERDUE</span>
            )}
            {task.status === "Closed" && (
              <span className="text-green-600 text-xs font-bold">CLOSED</span>
            )}
          </div>
          <h3 className="text-black-800 font-medium mb-1">
            {task.description}
          </h3>
          <div className="flex flex-wrap gap-3 text-xs text-black-600 mt-2">
            {task.location && <span>📍 {task.location}</span>}
            {task.targetDate && (
              <span>📅 Target: {new Date(task.targetDate).toLocaleDateString()}</span>
            )}
          </div>
          {task.status === "Closed" && task.solution && (
            <p className="text-xs text-gray-600 mt-2">✅ {task.solution}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 min-w-fit">
          {task.status !== "Closed" &&
            (editing ? (
              <div className="flex flex-col gap-2 w-48">
                <input
                  autoFocus
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  placeholder="Action taken..."
                  className="border border-gray-300 rounded px-2 py-1 text-xs w-full"
                />
                <button
                  onClick={() => onSubmit(task, solution)}
                  className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition whitespace-nowrap shadow-sm"
                >
                  Save & Close
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition whitespace-nowrap shadow-sm"
              >
                Submit solution
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;