import { useEffect, useState } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user', dept: '' });
  const [adding, setAdding] = useState(false);

  useEffect(() => { fetchUsers(); }, []);

  const fetchUsers = async () => {
    const { data } = await API.get('/users');
    setUsers(data);
    setLoading(false);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setAdding(true);
    try {
      await API.post('/auth/register', form);
      toast.success('User added!');
      setForm({ name: '', email: '', password: '', role: 'user', dept: '' });
      fetchUsers();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed');
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this user?')) return;
    try {
      await API.delete(`/users/${id}`);
      toast.success('Deleted');
      fetchUsers();
    } catch {
      toast.error('Failed');
    }
  };

  if (loading) return <div className="text-gray-400 text-center py-20">Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-normal text-gray-800 mb-2">User Management</h2>
      <p className="text-gray-500 text-sm mb-6">Add and manage team members</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Add New User</h3>
        <form onSubmit={handleAdd} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <input required placeholder="Full Name" value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
          <input required type="email" placeholder="Email" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
          <input required type="password" placeholder="Password" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
          <input placeholder="Department" value={form.dept}
            onChange={e => setForm({ ...form, dept: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500" />
          <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-blue-500">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" disabled={adding}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition">
            {adding ? 'Adding...' : '+ Add User'}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Name</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Email</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Department</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Role</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {u.name?.charAt(0)}
                    </div>
                    <span className="text-gray-800 font-medium">{u.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-500">{u.email}</td>
                <td className="px-4 py-3 text-gray-500">{u.dept || '—'}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${u.role === 'admin' ? 'bg-purple-50 text-purple-600 border-purple-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button onClick={() => handleDelete(u._id)}
                    className="px-3 py-1 bg-red-50 text-red-500 border border-red-200 rounded text-xs hover:bg-red-100 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
