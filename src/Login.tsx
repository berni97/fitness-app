import React from 'react';
import UserForm from './UserForm';

// This component is intended to be a Login-Formular
// Currently it only saves the Users name to localStorage of the browser.
function Login() {
  return (
    <div>
      <UserForm
        handleSubmit={(name: string) => {
          localStorage.setItem('user', name);
        }}
      />
    </div>
  );
}

export default Login;
