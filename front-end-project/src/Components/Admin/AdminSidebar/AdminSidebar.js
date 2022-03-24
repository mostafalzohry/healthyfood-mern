import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <>
         <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i className="fas fa-user-secret me-2" />
            Healthy Food
          </div>
          <div className="list-group list-group-flush my-3">
            <Link
              to="/admin"
              className="list-group-item list-group-item-action bg-success second-text active"
            >
              <i className="fas fa-tachometer-alt me-2" />
              Dashboard
            </Link>

            <Link
              to="/admin/products"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-gift me-2" />
              Products
            </Link>

            <a
              href="#"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-solid fa-user me-2" />
              Users
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >
              <i className="fas fa-power-off me-2" />
              Logout
            </a>
          </div>
        </div>
    </>
  )
}
