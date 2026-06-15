import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import AdminLayout from './pages/admin/AdminLayout';
import Overview from './pages/admin/Overview';
import Compliances from './pages/admin/Compliances';
import Users from './pages/admin/Users';
import AlertLogs from './pages/admin/AlertLogs';
import UserDashboard from './pages/user/UserDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute adminOnly>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Overview />} />
            <Route path="compliances" element={<Compliances />} />
            <Route path="users" element={<Users />} />
            <Route path="alertlogs" element={<AlertLogs />} />
          </Route>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
