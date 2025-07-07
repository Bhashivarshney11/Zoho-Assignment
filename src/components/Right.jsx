import React, { useState } from 'react';
import './Right.css';

const Right = () => {
  const [role, setRole] = useState('faculty');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');

    console.log('Login details:', {
      email,
      password,
      remember,
      role,
    });

    alert(`${role.charAt(0).toUpperCase() + role.slice(1)} login successful (simulated)!`);
  };

  const handleGoogleLogin = () => {
    alert(`Google login as ${role} (simulated)`);
  };

  return (
    <div className="right-panel">
      <div className="role-toggle">
        <button
          className={`role-btn ${role === 'student' ? 'active' : ''}`}
          onClick={() => setRole('student')}
        >
          Student
        </button>
        <button
          className={`role-btn ${role === 'faculty' ? 'active' : ''}`}
          onClick={() => setRole('faculty')}
        >
          Faculty
        </button>
      </div>

      <h2 className="login-heading">
        Logging in as {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>{role === 'student' ? 'Student ID or Email' : 'Faculty ID or Email'}</label>
          <input
            type="text"
            placeholder={`Enter your ${role === 'student' ? 'Student' : 'Faculty'} ID or email`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="forgot-link"
            onClick={() => alert('Password reset link clicked')}
          >
            Forgot password?
          </button>
        </div>

        <div className="remember-section">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <label htmlFor="remember">Remember me</label>
        </div>

        {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}

        <button type="submit" className="login-btn">Login</button>
      </form>

      <div className="divider">or continue with</div>

      <button className="google-btn" onClick={handleGoogleLogin}>
        <img src="/images/google.png" alt="Google" />
        Log In with Google
      </button>
    </div>
  );
};

export default Right;
