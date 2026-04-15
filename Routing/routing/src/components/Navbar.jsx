import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) return null;

  const isLoggedIn = !!localStorage.getItem('access');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
    // Using navigate ensures this re-renders since location changes
    // But if we're already on '/', we want to force re-render, so let's redirect to '/' 
    navigate('/');
    // A quick reload ensures all state clears properly if they log out from home
    if (location.pathname === '/') {
        window.location.reload();
    }
  };

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          <div className="logo-glow"></div>
          <Sparkles color="#a855f7" size={24} />
          <span>Nexus</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>Features</Link>
          <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
        </div>

        <div className="nav-actions">
          {isLoggedIn ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)', marginRight: '1rem' }}>
                <User size={18} color="var(--primary-color)" />
                <span style={{ fontWeight: '500' }}>{username}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary">Login</Link>
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
