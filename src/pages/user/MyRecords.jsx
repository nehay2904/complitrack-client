import { useEffect, useState } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';

const MyRecords = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const { data } = await API.get('/recordassignments/mine');
      setAssignments(data);
    } catch {
      toast.error('Failed to load your records');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (assignmentId, file) => {
    if (!file) return;
    setUploading(assignmentId);
    const formData = new FormData();
    formData.append('file', file);
    try {
      await API.post(`/recordassignments/${assignmentId}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Proof uploaded!');
      fetchData();
    } catch {
      toast.error('Upload failed');
    } finally {
      setUploading(null);
    }
  };

  const markReviewed = async (assignmentId) => {
    try {
      await API.patch(`/recordassignments/${assignmentId}/status`, { status: 'Reviewed' });
      toast.success('Marked as reviewed!');
      fetchData();
    } catch {
      toast.error('Failed');
    }
  };

  const apiBase = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace('/api', '');

  if (loading) return (
    <div className="text-center text-gray-400 py-20">Loading your records...</div>
  );

  return (
    <div>
      <h2 className="text-2xl font-normal text-gray-800 mb-1">My Records</h2>
      <p className="text-gray-500 text-sm mb-6">Records assigned to you</p>

      {assignments.length === 0 ? (
        <div className="text-center text-gray-400 py-20 bg-white rounded-xl border border-gray-200">
          No records assigned to you yet
        </div>
      ) : (
        <div className="space-y-3">
          {assignments.map(a => (
            <div key={a._id} className="bg-white rounded-xl border-2 border-gray-300 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-blue-600 font-mono text-xs font-bold">{a.recordId}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                      a.status === 'Reviewed'
                        ? 'bg-green-600 text-white border-green-700'
                        : 'bg-amber-500 text-white border-amber-600'
                    }`}>
                      {a.status}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {a.proofs?.length || 0} {a.proofs?.length === 1 ? 'upload' : 'uploads'} so far
                    </span>
                  </div>
                  <h3 className="text-gray-800 font-medium mb-2">{a.recordTitle}</h3>

                  {a.proofs && a.proofs.length > 0 && (
                    <button
                      onClick={() => setExpanded(expanded === a._id ? null : a._id)}
                      className="text-blue-600 text-xs font-medium hover:underline"
                    >
                      {expanded === a._id ? 'Hide upload history ▲' : 'View upload history ▼'}
                    </button>
                  )}

                  {expanded === a._id && (
                    <div className="mt-3 space-y-2 bg-gray-50 rounded-lg p-3">
                      {a.proofs.slice().reverse().map((p, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <a
                            href={`${apiBase}/uploads/${p.fileName}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline truncate max-w-xs"
                          >
                            📎 {p.fileName.split('-').slice(1).join('-')}
                          </a>
                          <span className="text-gray-400 whitespace-nowrap ml-2">
                            {new Date(p.uploadedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 min-w-fit">
                  <label className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition cursor-pointer text-center whitespace-nowrap shadow-sm">
                    {uploading === a._id ? 'Uploading...' : '📎 Upload'}
                    <input
                      type="file"
                      className="hidden"
                      onChange={e => handleUpload(a._id, e.target.files[0])}
                      disabled={uploading === a._id}
                    />
                  </label>
                  {a.status !== 'Reviewed' && (
                    <button
                      onClick={() => markReviewed(a._id)}
                      className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition whitespace-nowrap shadow-sm"
                    >
                      Mark Reviewed ✓
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecords;