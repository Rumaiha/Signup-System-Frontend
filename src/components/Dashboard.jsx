import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  if (!user) return <div>Loading user...</div>;

  return (
    <div>
      <h2>Welcome, {user.username || 'User'}</h2>

      {user.coverImage && (
        <img
          src={`http://localhost:5001/${user.coverImage}`}
          alt="Cover"
          width="100%"
          height="200px"
        />
      )}

      {user.profileImage && (
        <img
          src={`http://localhost:5001/${user.profileImage}`}
          alt="Profile"
          width="150px"
          style={{ borderRadius: '50%' }}
        />
      )}

      <br />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
