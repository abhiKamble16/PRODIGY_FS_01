import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const getProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setMessage(response.data.message);
      } catch (error) {
        setMessage(
          error.response?.data?.message || "Unable to access dashboard",
        );
      }
    };

    getProfile();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="dashboard-nav">
        <div className="dashboard-logo"></div>

        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </nav>

      {/* Main content */}
      <main className="dashboard-main">
        {/* Welcome */}
        <section className="welcome-section">
          <div>
            <p className="small-title">AUTHENTICATED USER</p>

            <h1>Welcome{user ? `, ${user.name}` : ""}</h1>

            <p className="welcome-text">
              You have successfully logged into your account.
            </p>
          </div>

          <div className="status-badge">
            <span className="status-dot"></span>
            Authenticated
          </div>
        </section>

        {/* Cards */}
        <section className="dashboard-grid">
          {/* Account Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Account Information</h2>
              <span className="card-icon">👤</span>
            </div>

            <div className="account-info">
              <div className="info-row">
                <span>Name</span>
                <strong>{user?.name || "Loading..."}</strong>
              </div>

              <div className="info-row">
                <span>Email</span>
                <strong>{user?.email || "Loading..."}</strong>
              </div>

              <div className="info-row">
                <span>Account Status</span>
                <strong className="active">Active</strong>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Security</h2>
              <span className="card-icon">🔒</span>
            </div>

            <div className="security-content">
              <div className="security-item">
                <span className="security-check">✓</span>

                <div>
                  <strong>Password Protected</strong>
                  <p>Your password is securely hashed.</p>
                </div>
              </div>

              <div className="security-item">
                <span className="security-check">✓</span>

                <div>
                  <strong>JWT Authentication</strong>
                  <p>Your session is authenticated securely.</p>
                </div>
              </div>

              <div className="security-item">
                <span className="security-check">✓</span>

                <div>
                  <strong>Protected Route</strong>
                  <p>This page requires authentication.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication message */}
        <section className="protected-card">
          <div className="protected-icon">🔐</div>

          <div>
            <h2>Protected Dashboard</h2>

            <p>{message || "Verifying your authentication..."}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        © 2026 AuthFlow · Secure Authentication System
      </footer>
    </div>
  );
}

export default Dashboard;
