import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../store/actions/auth";
import "./Home/Home.css";

const Nav = () =>  {
  const { user: currentUser } = useSelector((state) => state.auth);
  
  const count = useSelector((state)=>state.cartreducer.menu)
  console.log(count.length)

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
           Healthy
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to='/home' >
                Home
              </NavLink>
            </li>
{/* 
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/allMeals"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                  <Link className="dropdown-item" to="/allMeals">
                    All Meals 
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/BreakFast">
                    Breakfast
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Lunch">
                    
                    Lunch
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Dinner">
                    Dinner
                  </Link>
                </li>
              </ul>
            </li> */}

        
            <li className="nav-item">
               <NavLink className="nav-link"  to='/allMeals' >                     
               Menu
              </NavLink></li>


            <li className="nav-item">
              <NavLink className="nav-link" to='/about' >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/contact' >
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/faq'>
                FAQ
              </NavLink>
            </li>

            

            {/* <li className="nav-item">
            <Link to="/shoppinglist" className="nav-link" > Shopping cart  </Link>
            </li> */}

          </ul>

        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >

                <li className="nav-item">
               <NavLink to="/shoppinglist" className="nav-link" > 
               <i class="fa-solid fa-cart-plus"></i> Cart {count.length}
                 </NavLink>
            </li>


            {/* <li className="nav-item">
               <Link to="/shoppinglist" className="nav-link" > Shopping cart  </Link>
            </li> */}
          {currentUser ? (
            <>
                
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">{currentUser.username}</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/login" className="nav-link" onClick={logOut}>LogOut</NavLink>
            </li>
            </>
          ) : (
            <>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">Register</NavLink>
            </li>
            </>
          )}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
