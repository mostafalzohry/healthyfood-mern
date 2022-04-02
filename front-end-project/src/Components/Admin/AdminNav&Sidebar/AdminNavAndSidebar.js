import { React, useEffect , useRef, useState } from "react";
import { Route , Link } from 'react-router-dom';
import UsersTable from "../AdminDashboard/UsersTable/UsersTable";
import ProductsTable from "../ProductsTable/ProductsTable";
import OrdersTable from "../Orderstable/Orderstable"

export default function AdminNavAndSidebar() {
    const toggleRef = useRef();
    const WrapperRef = useRef();
    function togglebtn() {
      WrapperRef.current.classList.toggle("toggled");
    }
  
  return (
    <>

       <div className="d-flex" id="wrapper" ref={WrapperRef}>
        {/* Sidebar */}

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
              to="/adminnavandside/products"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-gift me-2" />
              Products
            </Link>

            <Link
              to="/adminnavandside/users"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-solid fa-user me-2" />
              Users
            </Link>

            <Link
              to="/adminnavandside/orders"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-solid fa-user me-2" />
              orders
            </Link>
{/* 
            <Link
              to="#"
              className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >
              <i className="fas fa-power-off me-2" />
              Logout
            </Link> */}
          </div>
        </div>
        {/* /#sidebar-wrapper */}



        <div id="page-content-wrapper">


            {/* nav */}
           
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
                ref={toggleRef}
                onClick={togglebtn}
              />
              <h2 className="fs-2 m-0">Dashboard</h2>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle second-text fw-bold  text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user me-2 text-dark" />
                    John Doe
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul> */}
            </div>
          </nav>
            {/* nav */}




          <div className="container-fluid px-4">
          



            <div className="row my-5">
            <Route  path="/adminnavandside/products" component={ProductsTable} />
            <Route  path="/adminnavandside/users" component={UsersTable} />
            <Route  path="/adminnavandside/orders" component={OrdersTable} />
                        {/* <ProductsTable  /> */}
                        {/* <UsersTable users={usersDash} /> */}




            </div>
          </div>
        </div>
      </div>
    </>
  )
}
