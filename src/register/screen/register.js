import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const API_URL = process.env.REACT_APP_API_URL;
  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Password dan konfirmasi tidak cocok.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}auth/register`, {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      console.log('Registrasi berhasil:', response.data);
      alert('Registrasi berhasil! Silakan login.');
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data) {
        alert('Gagal registrasi: ' + JSON.stringify(error.response.data.errors || error.response.data.message));
      } else {
        alert('Terjadi kesalahan saat registrasi');
      }
      console.error('Error:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            name="name"
            type="text"
            placeholder="Nama"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Konfirmasi Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.registerButton}>
            Register
          </button>
        </form>
        <p style={styles.text}>
          Sudah mempunyai akun?{' '}
          <span onClick={() => navigate('/')} style={styles.link}>
            Klik Login
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #43e97b, #38f9d7)',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '25px',
    fontSize: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    margin: '8px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  registerButton: {
    padding: '12px',
    marginTop: '15px',
    backgroundColor: '#43e97b',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  text: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#666',
  },
  link: {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Register;
