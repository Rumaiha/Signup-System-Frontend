import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <>
          <h1>Signup</h1>
          <SignupForm onSignup={(data) => setUser(data.user)} />

          <h1>Login</h1>
          <LoginForm onLogin={(data) => setUser(data.user)} />
        </>
      ) : (
        <Dashboard user={user} onLogout={() => setUser(null)} />
      )}
    </div>
  );
};

export default App;
