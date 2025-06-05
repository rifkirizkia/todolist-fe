import { useNavigate } from 'react-router-dom';

function HomeScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={{ margin: 0 }}>Home</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </header>
      <main style={styles.mainContent}>
        <p>Selamat datang di halaman Home!</p>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f0f2f5',
  },
  header: {
    backgroundColor: '#43e97b',
    color: 'white',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#fff',
    color: '#43e97b',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  mainContent: {
    padding: '30px',
    fontSize: '18px',
  },
};

export default HomeScreen;
