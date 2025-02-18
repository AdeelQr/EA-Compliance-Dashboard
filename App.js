// App.js
import React from 'react';
import './App.css';
import ProposalOverview from './components/ProposalOverview';
import ComplianceCheck from './components/ComplianceCheck';
import SimilarInitiatives from './components/SimilarInitiatives';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Digital Ministry EA Compliance Dashboard</h1>
        <div className="header-controls">
          <select>
            <option>All Ministries</option>
            <option>Ministry of Health</option>
            <option>Ministry of Education</option>
          </select>
          <button>New Proposal</button>
        </div>
      </header>
      
      <div className="dashboard-grid">
        <ProposalOverview />
        <ComplianceCheck />
        <SimilarInitiatives />
        <Recommendations />
      </div>
    </div>
  );
}

// ProposalOverview.js
function ProposalOverview() {
  return (
    <div className="dashboard-card">
      <h2>Current Proposal Overview</h2>
      <div className="proposal-details">
        <div className="detail-item">
          <label>Ministry:</label>
          <span>Ministry of Health</span>
        </div>
        <div className="detail-item">
          <label>Project:</label>
          <span>Healthcare Data Integration Platform</span>
        </div>
        <div className="detail-item">
          <label>Budget:</label>
          <span>RM 5,000,000</span>
        </div>
        <div className="detail-item">
          <label>Timeline:</label>
          <span>12 months</span>
        </div>
      </div>
    </div>
  );
}

// ComplianceCheck.js
function ComplianceCheck() {
  return (
    <div className="dashboard-card">
      <h2>EA Compliance Check</h2>
      <div className="compliance-scores">
        <div className="score-item">
          <label>Business Architecture</label>
          <div className="progress-bar">
            <div className="progress" style={{width: '85%'}}>85%</div>
          </div>
        </div>
        <div className="score-item">
          <label>Application Architecture</label>
          <div className="progress-bar">
            <div className="progress" style={{width: '75%'}}>75%</div>
          </div>
        </div>
        <div className="score-item">
          <label>Data Architecture</label>
          <div className="progress-bar">
            <div className="progress" style={{width: '90%'}}>90%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// SimilarInitiatives.js
function SimilarInitiatives() {
  return (
    <div className="dashboard-card">
      <h2>Similar Initiatives</h2>
      <div className="initiatives-list">
        <div className="initiative-item">
          <h3>Ministry of Education - Student Health Records</h3>
          <p>Status: Active</p>
          <p>Progress: 65%</p>
          <button>View Details</button>
        </div>
        <div className="initiative-item">
          <h3>Ministry of Defense - Medical Database</h3>
          <p>Status: Completed</p>
          <p>Success Rate: 85%</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

// App.css
.dashboard {
  padding: 20px;
  background-color: #f5f6fa;
  min-height: 100vh;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.dashboard-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.proposal-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.detail-item {
  display: flex;
  flex-direction: column;
}

.compliance-scores {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #4CAF50;
  text-align: center;
  color: white;
  line-height: 20px;
}

.initiatives-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.initiative-item {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.header-controls {
  display: flex;
  gap: 10px;
}

.header-controls select,
.header-controls button {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.header-controls button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
