import React, { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login'); // 'login' or 'signup'

  const handleLogout = () => {
    setUser(null);
    setView('login');
  };

  return (
    <div>
      {!user ? (
        <>
          <button onClick={() => setView('signup')}>Signup</button>
          <button onClick={() => setView('login')}>Login</button>

          {view === 'signup' && <SignupForm onSignup={(data) => setUser(data.user)} />}
          {view === 'login' && <LoginForm onLogin={(data) => setUser(data.user)} />}
        </>
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
