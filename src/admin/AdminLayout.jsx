import React, { useState } from "react";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-container">
      {/* Sidebar */}

      <div className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <h4 className="admin-logo">Admin Panel</h4>

        <ul className="admin-menu">
          <li>Dashboard</li>
          <li>Products</li>
          <li>Categories</li>
        </ul>
      </div>
      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)}></div>}
      {/* Main */}
      <div className="admin-main">
        {/* Topbar */}
        <div className="admin-topbar">
          {/* Mobile Toggle */}
          <button
            className="menu-toggle btn btn-dark btn-sm me-2"
            // onClick={() => setSidebarOpen(!sidebarOpen)}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <h5 className="mb-0">Welcome Admin</h5>

          <button className="btn btn-danger btn-sm">Logout</button>
        </div>

        {/* Content */}
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
