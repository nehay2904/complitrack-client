import { useEffect, useState } from 'react';
import API from '../../api/axios';

const Overview = () => {
  const [compliances, setCompliances] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/compliances').then(({ data }) => {
      setCompliances(data);
      setLoading(false);
    });
  }, []);

  const today = new Date();
  const total = compliances.length;
  const pending = compliances.filter(c => c.status === 'Pending').length;
  const completed = compliances.filter(c => c.status === 'Completed').length;
  const overdue = compliances.filter(c => {
    if (c.status === 'Completed') return false;
    const due = new Date(c.dueDate);
    return !isNaN(due) && today > due;
  }).length;

  if (loading) return <div className="text-gray-400 text-center py-20">Loading...</div>;

  const stats = [
    { label: 'Total', value: total, color: 'blue', icon: '📋' },
    { label: 'Pending', value: pending, color: 'amber', icon: '⏳' },
    { label: 'Overdue', value: overdue, color: 'red', icon: '🔴' },
    { label: 'Completed', value: completed, color: 'green', icon: '✅' },
  ];

  const colorMap = {
    blue: 'bg-blue-50 border-blue-100 text-blue-600',
    amber: 'bg-amber-50 border-amber-100 text-amber-600',
    red: 'bg-red-50 border-red-100 text-red-600',
    green: 'bg-green-50 border-green-100 text-green-600',
  };

  return (
    <div>
      <h2 className="text-2xl font-normal text-gray-800 mb-1">Overview</h2>
      <p className="text-gray-500 text-sm mb-6">JPL Mines Compliance Status</p>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className={`rounded-xl border p-5 ${colorMap[s.color]}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">{s.icon}</span>
              <span className="text-3xl font-medium">{s.value}</span>
            </div>
            <p className="text-sm font-medium opacity-70">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-800 mb-4">⚠️ Overdue Compliances</h3>
        {overdue === 0 ? (
          <p className="text-gray-400 text-sm">No overdue compliances!</p>
        ) : (
          <div className="space-y-3">
            {compliances.filter(c => {
              if (c.status === 'Completed') return false;
              const due = new Date(c.dueDate);
              return !isNaN(due) && today > due;
            }).map(c => (
              <div key={c._id} className="flex items-center justify-between p-3 bg-red-50 border border-red-100 rounded-lg">
                <div>
                  <p className="text-gray-800 text-sm font-medium">{c.title}</p>
                  <p className="text-gray-400 text-xs">
                    {c.complianceId} · {c.signingAuthority?.length ? c.signingAuthority.map(u => u.name).join(', ') : 'Unassigned'}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {c.driveLink && (
                    <a href={c.driveLink} target="_blank" rel="noopener noreferrer"
                      className="text-blue-500 text-xs hover:underline">
                      📎 Document
                    </a>
                  )}
                  <span className="text-red-500 text-xs font-medium">Due: {c.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;