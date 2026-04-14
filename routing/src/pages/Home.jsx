import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Cpu, Layers, ArrowRight, Zap, Play } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero animate-up">
        <div className="badge glass">
          <Sparkles size={14} className="neon-icon" />
          <span>New: Lumina Gen-3 Model is live</span>
        </div>
        <h1 className="hero-title">
          Transcend the <span className="gradient-text">Ordinary</span>
        </h1>
        <p className="hero-subtitle">
          Lumina AI combines neural intelligence with artistic intuition. 
          Generate cinematic worlds, complex systems, and digital life in seconds.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => navigate('/register')}>
            Begin Creation <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary">
            <Play size={18} fill="white" /> Watch Trailer
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
