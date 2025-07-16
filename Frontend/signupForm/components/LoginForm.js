// App.jsx
import React, { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <>
          <h1>Signup</h1>
          <SignupForm />
          <h1>Login</h1>
          <LoginForm onLogin={(data) => setUser(data.user)} />
        </>
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
};

export default App;
