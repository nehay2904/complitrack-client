import { useEffect, useState } from 'react';
import API from '../../api/axios';

const typeColors = {
  reminder: 'bg-blue-50 text-blue-600 border-blue-200',
  escalation: 'bg-amber-50 text-amber-600 border-amber-200',
  overdue: 'bg-red-50 text-red-600 border-red-200',
};

const AlertLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/alertlogs').then(({ data }) => {
      setLogs(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-gray-400 text-center py-20">Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-normal text-gray-800 mb-2">Alert Logs</h2>
      <p className="text-gray-500 text-sm mb-6">History of all sent email alerts</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Compliance</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Sent To</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Type</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Sent At</th>
            </tr>
          </thead>
          <tbody>
            {logs.length === 0 ? (
              <tr><td colSpan={4} className="text-center text-gray-400 py-10">No alert logs yet</td></tr>
            ) : logs.map(log => (
              <tr key={log._id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <p className="text-gray-800 font-medium">{log.complianceTitle}</p>
                  <p className="text-gray-400 text-xs">{log.complianceId}</p>
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">{log.sentTo}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${typeColors[log.type]}`}>
                    {log.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">
                  {new Date(log.sentAt).toLocaleString('en-IN')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertLogs;
