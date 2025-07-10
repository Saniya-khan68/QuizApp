 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (name.trim() && email.trim()) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', name);
      localStorage.setItem('userEmail', email);

      navigate('/home');
    } else {
      alert('Please enter both name and email');
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Enter your Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px',
    textAlign: 'center',
  },
  form: {
    display: 'inline-block',
  },
  input: {
    display: 'block',
    padding: '10px',
    margin: '10px auto',
    fontSize: '16px',
    width: '250px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'royalblue',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '270px',
  }
};

export default Login;
