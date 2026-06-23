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
import InternalMineDocuments from "./Internal Mine Documents"
const statusColors = {
  Pending: "bg-amber-500 text-white border-amber-600",
  Completed: "bg-green-600 text-white border-green-700",
};

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [compliances, setCompliances] = useState([]);
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
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        {/* Top Row */}
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={jindalLogo}
              alt="Jindal Power"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-gray-800 font-medium leading-none">
                CompliTrack
              </h1>
              <p className="text-gray-400 text-xs">JPL Mines</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-gray-800 text-sm font-medium">{user?.name}</p>
              <p className="text-gray-400 text-xs">{user?.dept}</p>
            </div>
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {user?.name?.charAt(0)}
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 text-sm rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Bottom Row — two sides */}
        <div className="px-6 flex items-center justify-between border-t border-gray-100">
          {/* Left — My Tasks + My Records */}
        {/* Left — My Tasks + My Records */}
<div className="flex gap-1">
  {[
    { key: "tasks", label: "📋 My Tasks" },
    { key: "myrecords", label: "🗂 Update my Records" },
  ].map((tab) => (
    <button
      key={tab.key}



      onClick={() => goToTab(tab.key)}
      className={`relative px-4 py-3 text-sm font-bold border-b-2 transition ${
        activeTab === tab.key
          ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-800"
      }`}
    >
      {tab.label}
      {tab.key === "tasks" && (
  <span className="ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-red-600 text-white text-xs font-bold rounded-full">
    {counts.pending + counts.overdue}
  </span>
)}
    </button>
  ))}
</div>

          {/* Right — Notices, Returns, Forms, Records */}
          <div className="flex gap-1">
            {[
                { key: "internal-mine-documents", label: "📄 Internal Documents" },
              { key: "rules", label: "📜 Rules & Regulations" },
              { key: "notices", label: "📢 Notices" },
              { key: "returns", label: "📊 Returns" },
              { key: "forms", label: "📄 Forms" },
              { key: "records", label: "🗂 Statutory Records" },
            
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => goToTab(tab.key)}
                className={`px-3 py-3 text-sm font-bold border-b-2 transition ${
                  activeTab === tab.key
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8">
        {activeTab === "tasks" && (
          <>
            <h2 className="text-2xl font-normal text-gray-800 mb-1">
              Welcome, {user?.name} 👋
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Your assigned compliance tasks
            </p>

            {/* Filter Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {[
                {
                  key: "all",
                  label: "All Tasks",
                  value: counts.all,
                  cls: "bg-blue-600 text-white",
                },
                {
                  key: "pending",
                  label: "Pending",
                  value: counts.pending,
                  cls: "bg-amber-500 text-white",
                },

                {
                  key: "completed",
                  label: "Completed",
                  value: counts.completed,
                  cls: "bg-green-600 text-white",
                },
                {
                  key: "overdue",
                  label: "Overdue",
                  value: counts.overdue,
                  cls: "bg-red-600 text-white",
                },
              ].map((card) => (
                <button
                  key={card.key}
                  onClick={() => setFilter(card.key)}
                  className={`rounded-xl p-4 text-left transition shadow-sm ${card.cls} ${filter === card.key ? "ring-4 ring-offset-2 ring-gray-300" : ""}`}
                >
                  <p className="text-sm font-bold">{card.value}</p>
                  <p className="text-xl font-bold opacity-90 mt-1">
                    {card.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Task Cards */}
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
          </>
        )}
        {activeTab === "rules" && <RulesRegulations />}
        {activeTab === "notices" && <Notices />}
        {activeTab === "returns" && <Returns />}
        {activeTab === "forms" && <Forms />}
        {activeTab === "records" && <Records />}
        {activeTab === "myrecords" && <MyRecords />}
      </div>
    </div>
  );
};

export default UserDashboard;
