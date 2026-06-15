import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/axios';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const statusColors = {
  Pending: 'bg-amber-50 text-amber-600 border-amber-200',
  InProgress: 'bg-blue-50 text-blue-600 border-blue-200',
  Completed: 'bg-green-50 text-green-600 border-green-200',
};

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [compliances, setCompliances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const { data } = await API.get('/compliances');
      setCompliances(data);
    } catch {
      toast.error('Failed to load');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/compliances/${id}/status`, { status });
      toast.success('Status updated!');
      fetchData();
    } catch {
      toast.error('Failed');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const today = new Date();

  const counts = {
    all: compliances.length,
    pending: compliances.filter(c => c.status === 'Pending').length,
    inprogress: compliances.filter(c => c.status === 'InProgress').length,
    completed: compliances.filter(c => c.status === 'Completed').length,
    overdue: compliances.filter(c => {
      const due = new Date(c.dueDate);
      return !isNaN(due) && today > due && c.status !== 'Completed';
    }).length,
  };

  const filtered = compliances.filter(c => {
    if (filter === 'pending') return c.status === 'Pending';
    if (filter === 'inprogress') return c.status === 'InProgress';
    if (filter === 'completed') return c.status === 'Completed';
    if (filter === 'overdue') {
      const due = new Date(c.dueDate);
      return !isNaN(due) && today > due && c.status !== 'Completed';
    }
    return true;
  });

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-400">Loading...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">C</div>
          <div>
            <h1 className="text-gray-800 font-medium leading-none">CompliTrack</h1>
            <p className="text-gray-400 text-xs">JPL Mines</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-gray-800 text-sm font-medium">{user?.name}</p>
            <p className="text-gray-400 text-xs">{user?.dept}</p>
          </div>
          <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {user?.name?.charAt(0)}
          </div>
          <button onClick={handleLogout}
            className="px-4 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 text-sm rounded-lg transition">
            Logout
          </button>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-normal text-gray-800 mb-1">Welcome, {user?.name} 👋</h2>
        <p className="text-gray-500 text-sm mb-6">Your assigned compliance tasks</p>

        {/* Filter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { key: 'all', label: 'All Tasks', value: counts.all, cls: 'bg-blue-50 border-blue-100 text-blue-600' },
            { key: 'pending', label: 'Pending', value: counts.pending, cls: 'bg-amber-50 border-amber-100 text-amber-600' },
            { key: 'inprogress', label: 'In Progress', value: counts.inprogress, cls: 'bg-blue-50 border-blue-100 text-blue-600' },
            { key: 'completed', label: 'Completed', value: counts.completed, cls: 'bg-green-50 border-green-100 text-green-600' },
            { key: 'overdue', label: 'Overdue', value: counts.overdue, cls: 'bg-red-50 border-red-100 text-red-600' },
          ].map(card => (
            <button key={card.key} onClick={() => setFilter(card.key)}
              className={`rounded-xl p-4 text-left transition border ${card.cls} ${filter === card.key ? 'ring-2 ring-blue-400' : ''}`}>
              <p className="text-2xl font-medium">{card.value}</p>
              <p className="text-xs font-medium opacity-70 mt-1">{card.label}</p>
            </button>
          ))}
        </div>

        {/* Task Cards */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-400 py-20 bg-white rounded-xl border border-gray-200">
              No tasks found
            </div>
          ) : filtered.map(c => {
            const due = new Date(c.dueDate);
            const isOverdue = !isNaN(due) && today > due && c.status !== 'Completed';
            return (
              <div key={c._id} className={`bg-white rounded-xl border p-5 shadow-sm ${isOverdue ? 'border-l-4 border-l-red-400 border-red-100' : c.status === 'Completed' ? 'border-l-4 border-l-green-400 border-green-100' : 'border-gray-200'}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-blue-500 font-mono text-xs">{c.complianceId}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${statusColors[c.status]}`}>
                        {c.status}
                      </span>
                      {isOverdue && <span className="text-red-500 text-xs font-bold">OVERDUE</span>}
                    </div>
                    <h3 className="text-gray-800 font-medium mb-1">{c.title}</h3>
                    {c.detail && <p className="text-gray-500 text-xs mb-2 line-clamp-2">{c.detail}</p>}
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-2">
                      {c.dueDate && <span>📅 Due: {c.dueDate}</span>}
                      {c.alertDate && <span>🔔 Alert: {c.alertDate}</span>}
                      {c.recurrence && <span>🔁 {c.recurrence}</span>}
                      {c.submissionAuthority && <span>🏛 {c.submissionAuthority}</span>}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 min-w-fit">
                    {c.status === 'Pending' && (
                      <button onClick={() => updateStatus(c._id, 'InProgress')}
                        className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg transition whitespace-nowrap">
                        Start Task
                      </button>
                    )}
                    {c.status !== 'Completed' && (
                      <button onClick={() => updateStatus(c._id, 'Completed')}
                        className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-xs rounded-lg transition whitespace-nowrap">
                        Mark Done ✓
                      </button>
                    )}
                    {c.status === 'Completed' && (
                      <span className="px-3 py-2 bg-green-50 text-green-600 border border-green-200 text-xs rounded-lg text-center">
                        ✅ Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
