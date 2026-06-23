import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const links = [
  { to: '/admin', label: 'Overview', icon: '📊' },
  { to: '/admin/compliances', label: 'Compliances', icon: '📋' },
  { to: '/admin/users', label: 'Users', icon: '👥' },
  { to: '/admin/alertlogs', label: 'Alert Logs', icon: '🔔' },
  { to: '/admin/assignrecords', label: 'Assign Records', icon: '🗂' },
];

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out');
    navigate('/login');
  };

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">C</div>
          <div>
            <h1 className="text-gray-800 font-medium text-lg leading-none">CompliTrack</h1>
            <p className="text-gray-400 text-xs">JPL Mines</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/admin'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {user?.name?.charAt(0)}
          </div>
          <div>
            <p className="text-gray-800 text-sm font-medium">{user?.name}</p>
            <p className="text-gray-400 text-xs">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 text-sm rounded-lg transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
