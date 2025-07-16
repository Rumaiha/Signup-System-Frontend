import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <img src={`http://localhost:5000/${user.coverImage}`} alt="Cover" width="100%" height="200px" />
      <img src={`http://localhost:5000/${user.profileImage}`} alt="Profile" width="150px" style={{ borderRadius: '50%' }} />
    </div>
  );
};

export default Dashboard;