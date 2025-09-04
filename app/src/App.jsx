import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [deploymentCount, setDeploymentCount] = useState(42);

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: false 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleAccessLogs = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setDeploymentCount(prev => prev + 1);
    }, 2000);
  };

  return (
    <div className="app-container">
      <div className="glass-card">
        <div className="header">
          <h1 className="title">CYBERNETIC OVERVIEW</h1>
          <div className="pulse-indicator"></div>
        </div>
        
        <div className="info-grid">
          <div className="info-box">
            <span className="label">LOCAL TIME //</span>
            <span className="value digital-font">{formatTime(time)}</span>
          </div>
          <div className="info-box">
            <span className="label">SYSTEM DATE //</span>
            <span className="value digital-font">{formatDate(time)}</span>
          </div>
          <div className="info-box">
            <span className="label">STATUS //</span>
            <span className="value status-online">ONLINE</span>
          </div>
          <div className="info-box">
            <span className="label">DEPLOYMENTS //</span>
            <span className="value">{deploymentCount}</span>
          </div>
        </div>

        <div className="metrics-bar">
          <div className="metric">
            <span className="metric-label">CPU</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '67%'}}></div>
            </div>
            <span className="metric-value">67%</span>
          </div>
          <div className="metric">
            <span className="metric-label">MEM</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '43%'}}></div>
            </div>
            <span className="metric-value">43%</span>
          </div>
        </div>
        
        <p className="description">
          Initiating secure data stream for AWS CI/CD pipeline diagnostics.
          Monitoring CodePipeline, CodeBuild, CodeDeploy, and S3 integrations.
          System operational and ready for deployment.
        </p>
        
        <button 
          className={`action-button ${isLoading ? 'loading' : ''}`}
          onClick={handleAccessLogs}
          disabled={isLoading}
        >
          {isLoading ? 'ACCESSING...' : 'ACCESS LOGS //'}
        </button>
      </div>
      <div className="scan-lines"></div>
    </div>
  );
}

export default App;