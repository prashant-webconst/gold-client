import React, { use, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="admin-container">
      {/* Sidebar */}

      <div className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <h4 className="admin-logo">Admin Panel</h4>

        <ul className="admin-menu">
          <li>
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `admin-link ${isActive ? "active" : ""}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `admin-link ${isActive ? "active" : ""}`
              }
            >
              Products
            </NavLink>
          </li> */}
          <li>
            <div
              className="admin-link justify-content-between align-items-center"
              onClick={() =>
                setOpenMenu(openMenu === "products" ? null : "products")
              }
            >
              Products
            </div>
            {openMenu === "products" && (
              <ul className="submenu">
                <li>
                  <NavLink
                    to="/admin/products"
                    end
                    className={({ isActive }) =>
                      `admin-link ${isActive ? "active" : ""}`
                    }
                  >
                    {" "}
                    All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/products/add"
                    className={({ isActive }) =>
                      `admin-link ${isActive ? "active" : ""}`
                    }
                  >
                    {" "}
                    Add Product
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      {sidebarOpen && (
        <div
          className="admin-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
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
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
