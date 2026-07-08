import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../api/axios';
import toast from 'react-hot-toast';

// Tweak this to match your exact dashboard sidebar green if it's off
const GREEN = '#0F5132';
const GREEN_DARK = '#0A3D25';

// Counts a number up from 0 to target over `duration` ms, starts when `start` is true
const useCountUp = (target, start, duration = 1400) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic for a nice deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return value;
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // small delay so the animation feels intentional on mount, not instant
    const t = setTimeout(() => setStatsStarted(true), 300);
    return () => clearTimeout(t);
  }, []);

  const modules = useCountUp(500, statsStarted, 1600);
  const frameworks = useCountUp(15, statsStarted, 1200);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post('/auth/login', { email, password });
      login(data);
      toast.success(`Welcome, ${data.name}!`);
      if (data.role === 'admin') navigate('/admin');
      else navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT — 60% green hero panel */}
      <div
        className="hidden lg:flex lg:w-[60%] relative flex-col justify-center px-16 py-12 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${GREEN} 0%, ${GREEN_DARK} 100%)` }}
      >
        {/* subtle decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-5" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white opacity-5" />

        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            CompliTrack
          </h1>
          <p className="text-green-100 text-lg leading-relaxed mb-12">
            A centralised portal for JPL Mines to track and manage all statutory
            compliances, safety committee meetings, and related records — in one place.
          </p>

          {/* Stat cards with count-up animation */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-5 flex items-baseline gap-4">
              <span className="text-4xl font-bold text-white tabular-nums min-w-[90px]">
                {modules}+
              </span>
              <span className="text-green-100 text-sm">
                compliance modules in one portal
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-5 flex items-baseline gap-4">
              <span className="text-4xl font-bold text-white tabular-nums min-w-[90px]">
                {frameworks}+
              </span>
              <span className="text-green-100 text-sm">
                statutory frameworks covered — Explosives Rules, OSH, CMR
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-5 flex items-baseline gap-4">
              <span className="text-4xl font-bold text-white tabular-nums min-w-[90px]">
                0
              </span>
              <span className="text-green-100 text-sm">
                missed statutory deadlines, with automated alerts
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — 40% login form (untouched logic) */}
      <div className="w-full lg:w-[40%] bg-white flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          {/* Mobile-only header since left panel is hidden below lg */}
          <div className="text-center mb-8 lg:hidden">
            <h1 className="text-2xl font-normal text-gray-800">CompliTrack</h1>
            <p className="text-gray-500 text-sm mt-1">JPL Mines — Compliance Management</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-normal text-gray-800 mb-6 text-center">Sign in</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-medium rounded-lg transition text-sm"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 font-medium mb-1">Credentials</p>
              <p className="text-xs text-gray-600">Password : Jindal@123</p>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">© 2026 JPL Mines</p>
        </div>
      </div>
    </div>
  );
};

export default Login;