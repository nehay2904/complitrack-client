import { useEffect, useState } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';

const statusColors = {
  Pending: 'bg-amber-50 text-amber-600 border-amber-200',
  InProgress: 'bg-blue-50 text-blue-600 border-blue-200',
  Completed: 'bg-green-50 text-green-600 border-green-200',
};

const emptyForm = {
  complianceId: '', type: 'recurring', act: '', title: '',
  detail: '', recurrence: '', signingAuthority: '',
  submissionAuthority: '', dueDate: '', alertDate: '', status: 'Pending'
};

const Compliances = () => {
  const [compliances, setCompliances] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const [c, u] = await Promise.all([API.get('/compliances'), API.get('/users')]);
      setCompliances(c.data);
      setUsers(u.data);
    } catch {
      toast.error('Failed to load');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editId) {
        await API.put(`/compliances/${editId}`, form);
        toast.success('Updated!');
      } else {
        await API.post('/compliances', form);
        toast.success('Compliance added!');
      }
      setShowForm(false);
      setForm(emptyForm);
      setEditId(null);
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (c) => {
    setForm({
      complianceId: c.complianceId,
      type: c.type,
      act: c.act || '',
      title: c.title,
      detail: c.detail || '',
      recurrence: c.recurrence || '',
      signingAuthority: c.signingAuthority?._id || '',
      submissionAuthority: c.submissionAuthority || '',
      dueDate: c.dueDate || '',
      alertDate: c.alertDate || '',
      status: c.status
    });
    setEditId(c._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this compliance?')) return;
    try {
      await API.delete(`/compliances/${id}`);
      toast.success('Deleted');
      fetchData();
    } catch {
      toast.error('Failed to delete');
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/compliances/${id}/status`, { status });
      toast.success('Status updated');
      fetchData();
    } catch {
      toast.error('Failed');
    }
  };

  const assignUser = async (id, userId) => {
    try {
      await API.patch(`/compliances/${id}/assign`, { userId });
      toast.success('Assigned!');
      fetchData();
    } catch {
      toast.error('Failed to assign');
    }
  };

  const filtered = compliances.filter(c => {
    if (filterStatus && c.status !== filterStatus) return false;
    if (filterType && c.type !== filterType) return false;
    if (search && !c.title.toLowerCase().includes(search.toLowerCase()) &&
      !c.complianceId.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (loading) return <div className="text-gray-400 text-center py-20">Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-normal text-gray-800">Compliances</h2>
          <p className="text-gray-500 text-sm">Manage all compliance tasks</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setForm(emptyForm); setEditId(null); }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition"
        >
          + Add Compliance
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            {editId ? 'Edit Compliance' : 'Add New Compliance'}
          </h3>
          <form onSubmit={handleSave} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <input required placeholder="Compliance ID (e.g. REC-01)" value={form.complianceId}
              onChange={e => setForm({ ...form, complianceId: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
            <input required placeholder="Title" value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
            <input placeholder="Act / Document" value={form.act}
              onChange={e => setForm({ ...form, act: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-blue-500">
              <option value="recurring">Recurring</option>
              <option value="event">Event-based</option>
            </select>
            <input placeholder="Recurrence (Monthly, Annual...)" value={form.recurrence}
              onChange={e => setForm({ ...form, recurrence: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
            <input placeholder="Due Date (YYYY-MM-DD)" value={form.dueDate}
              onChange={e => setForm({ ...form, dueDate: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
            <input placeholder="Alert Date (YYYY-MM-DD)" value={form.alertDate}
              onChange={e => setForm({ ...form, alertDate: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
            <input placeholder="Submission Authority" value={form.submissionAuthority}
              onChange={e => setForm({ ...form, submissionAuthority: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
            <select value={form.signingAuthority} onChange={e => setForm({ ...form, signingAuthority: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-blue-500">
              <option value="">Assign to user</option>
              {users.map(u => <option key={u._id} value={u._id}>{u.name} — {u.dept}</option>)}
            </select>
            <textarea placeholder="Detail / Description" value={form.detail}
              onChange={e => setForm({ ...form, detail: e.target.value })}
              rows={2}
              className="col-span-2 lg:col-span-3 px-3 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500 resize-none" />
            <div className="col-span-2 lg:col-span-3 flex gap-3">
              <button type="submit" disabled={saving}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition">
                {saving ? 'Saving...' : editId ? 'Update' : 'Add Compliance'}
              </button>
              <button type="button" onClick={() => { setShowForm(false); setEditId(null); }}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filters */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <input type="text" placeholder="Search..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-blue-500">
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="InProgress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select value={filterType} onChange={e => setFilterType(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-blue-500">
          <option value="">All Types</option>
          <option value="recurring">Recurring</option>
          <option value="event">Event-based</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-gray-500 font-medium">ID</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Title</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Type</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Due Date</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Alert Date</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Status</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Assigned To</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8} className="text-center text-gray-400 py-10">No compliances found</td></tr>
              ) : filtered.map(c => (
                <tr key={c._id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-3 text-blue-500 font-mono text-xs">{c.complianceId}</td>
                  <td className="px-4 py-3 max-w-xs">
                    <p className="text-gray-800 font-medium truncate">{c.title}</p>
                    <p className="text-gray-400 text-xs">{c.recurrence}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs border ${c.type === 'recurring' ? 'bg-purple-50 text-purple-600 border-purple-200' : 'bg-orange-50 text-orange-600 border-orange-200'}`}>
                      {c.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{c.dueDate || '—'}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{c.alertDate || '—'}</td>
                  <td className="px-4 py-3">
                    <select value={c.status} onChange={e => updateStatus(c._id, e.target.value)}
                      className={`px-2 py-1 rounded-full text-xs border font-medium focus:outline-none ${statusColors[c.status]}`}>
                      <option value="Pending">Pending</option>
                      <option value="InProgress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <select value={c.signingAuthority?._id || ''}
                      onChange={e => assignUser(c._id, e.target.value)}
                      className="px-2 py-1 bg-white border border-gray-300 rounded text-gray-700 text-xs focus:outline-none focus:border-blue-500">
                      <option value="">Unassigned</option>
                      {users.map(u => <option key={u._id} value={u._id}>{u.name}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(c)}
                        className="px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded text-xs hover:bg-blue-100 transition">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(c._id)}
                        className="px-2 py-1 bg-red-50 text-red-500 border border-red-200 rounded text-xs hover:bg-red-100 transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
          <p className="text-gray-400 text-xs">Showing {filtered.length} of {compliances.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Compliances;
