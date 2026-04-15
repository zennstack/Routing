import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Cpu, Layers, ArrowRight, Zap, Play, LogOut, CheckCircle } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by looking for access token
    const token = localStorage.getItem('access');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/');
  };

  // If the user is logged in, show the Dashboard view
  if (isLoggedIn) {
    return (
      <div className="home-container" style={{ paddingTop: '8rem' }}>
        <section className="hero animate-up">
          <div className="badge glass" style={{ borderColor: 'rgba(34, 197, 94, 0.3)', color: '#22c55e' }}>
            <CheckCircle size={14} className="neon-icon" color="#22c55e" />
            <span>System Access Granted</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: '4rem' }}>
            Welcome to the <span className="gradient-text">Nexus</span>
          </h1>
          <p className="hero-subtitle">
            You are successfully authenticated. Your neural interface is fully synchronized and ready for command input.
          </p>
          <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => alert('Launching Workspace...')}>
              Launch Workspace <ArrowRight size={18} />
            </button>
          </div>
        </section>

        <section className="features-grid container">
          <div className="feature-item glass animate-up" style={{ animationDelay: '0.2s', textAlign: 'center' }}>
             <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--accent-color)' }}>0</h3>
             <p>Active Projects</p>
          </div>
          <div className="feature-item glass animate-up" style={{ animationDelay: '0.3s', textAlign: 'center' }}>
             <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--primary-color)' }}>100%</h3>
             <p>System Health</p>
          </div>
          <div className="feature-item glass animate-up" style={{ animationDelay: '0.4s', textAlign: 'center' }}>
             <h3 style={{ margin: 0, fontSize: '2rem', color: '#ec4899' }}>Synced</h3>
             <p>Cloud Storage</p>
          </div>
        </section>
      </div>
    );
  }

  // If not logged in, show the Landing Page view
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero animate-up">
        <div className="badge glass">
          <Sparkles size={14} className="neon-icon" />
          <span>New: Nexus Gen-3 Model is live</span>
        </div>
        <h1 className="hero-title">
          Transcend the <span className="gradient-text">Ordinary</span>
        </h1>
        <p className="hero-subtitle">
          Nexus combines neural intelligence with artistic intuition. 
          Generate cinematic worlds, complex systems, and digital life in seconds.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => navigate('/register')}>
            Begin Creation <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </div>
      </section>

      {/* Featured Art Section */}
      <section className="featured-showcase animate-up" style={{ animationDelay: '0.2s' }}>
        <div className="showcase-card glass">
          <img 
            src="/hero.png" 
            alt="AI Art Display" 
            className="showcase-img"
          />
          <div className="card-overlay">
            <div className="overlay-info">
              <h4>Neural Geometry #402</h4>
              <p>Prompt: "Liquid light crystalline structure"</p>
            </div>
            <div className="creation-meta">
              <span>Gen Time: 4.2s</span>
              <span>Steps: 150</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="features-grid container">
        <div className="feature-item glass animate-up" style={{ animationDelay: '0.3s' }}>
          <div className="icon-box purple">
            <Cpu size={24} />
          </div>
          <h3>Neural Core</h3>
          <p>Driven by the most advanced large-scale visual transformer model.</p>
        </div>
        <div className="feature-item glass animate-up" style={{ animationDelay: '0.4s' }}>
          <div className="icon-box cyan">
            <Layers size={24} />
          </div>
          <h3>Multimodal Sync</h3>
          <p>Seamlessly blend text, image, and motion into a single workflow.</p>
        </div>
        <div className="feature-item glass animate-up" style={{ animationDelay: '0.5s' }}>
          <div className="icon-box pink">
            <Zap size={24} />
          </div>
          <h3>Instant Rendering</h3>
          <p>Real-time inference allows for zero-lag creative exploration.</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
