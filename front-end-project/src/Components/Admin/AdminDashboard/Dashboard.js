import axios from "axios";
import { React, useEffect, useLayoutEffect, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Router } from "react-router-dom";
import CardsDahboard from "../CardsDahboard/CardsDahboard";
import ProductsTable from "../ProductsTable/ProductsTable";
import "./Dashboard.css";
import UsersTable from "./UsersTable/UsersTable";
import OrdersTable from "../Orderstable/Orderstable"
import Loader from '../../Loader/Loader';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
export default function Dashboard() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])

  
  const toggleRef = useRef();
  const WrapperRef = useRef();
  function togglebtn() {
    WrapperRef.current.classList.toggle("toggled");
  }

  // use  state
  const [productsDash, setproductsDash] = useState([]);
  const [usersDash, setusersDash] = useState([]);
  const [ordersDash, setordersDash] = useState([]);
 



  // use effect

  useEffect(() => {
    axios
      .get("http://localhost:4000/foods")
      .then((res) => {
        setproductsDash(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productsDash]);
  // ---------------------------------------
  useEffect(() => {
    axios
      .get("http://localhost:4000/users/users-all")
      .then((res) => {
        console.log(res.data);
        setusersDash(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [usersDash]);
  // ---------------------------------------

  useEffect(() => {
    axios
      .get("http://localhost:4000/orders")
      .then((res) => {
        setordersDash(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ordersDash]);















  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser || currentUser.isAdmin !== "true") {
    return <Redirect to="/" />;
  }
  return (
    <>
    {loading ? <Loader/>:
      <div className="d-flex" id="wrapper" ref={WrapperRef}>

        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i className="fas fa-user-secret me-2" />
            Healthy Food
          </div>
          <div className="list-group list-group-flush my-3">
            <Link
              to="/admin"
              className=" zzz  list-group-item list-group-item-action bg-success second-text active"
            >
              <i className="fas fa-tachometer-alt me-2" />
              Dashboard
            </Link>

            <Link
              to="/adminnavandside/products"
              className=" zzz   list-group-item list-group-item-action bg-transparent second-text fw-bold"
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
            {/* <Link
              to="#"
              className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >
              <i className="fas fa-power-off me-2" />
              Logout
            </Link> */}
          </div>
        </div>
        {/* /#sidebar-wrapper */}

        {/* Page Content */}
        <div id="page-content-wrapper">


            {/* nav */}
            {/* <AdminNav/> */}
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
{/*               
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
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
            <div className="row g-3 my-2">

              {/* card 1 */}
              <div className="col-md-4">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <CardsDahboard
                      prod={productsDash}
                      name={"Products"}
                      prodLogo={
                        <i
                          className="fas fa-gift
           fs-1 primary-text border rounded-full
            secondary-bg p-3"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
              {/* card 1 */}
              {/* card 2 */}

              <div className="col-md-4">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <CardsDahboard
                      prod={usersDash}
                      name={"Users"}
                      prodLogo={
                        <i
                          className="fas fa-user
                          fs-1 primary-text border rounded-full
                            secondary-bg p-3"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="col-md-4">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <CardsDahboard
                      prod={ordersDash}
                      name={"orders"}
                      prodLogo={
                        <i
                        
                        // <FontAwesomeIcon icon="fa-solid fa-person-carry-box" />
                        // <i class="fa-solid fa-person-carry-box"></i>
                        className="fas fa-user
                        fs-1 primary-text border rounded-full
                          secondary-bg p-3"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
              {/* card 3 */}

            </div>



            <div className="row my-5">

                        <ProductsTable/>
                        <UsersTable/>
                        {/* <OrdersTable/> */}
            {/* <Route  path="/admin/products" component={ProductsTable} /> */}



            </div>
          </div>
        </div>
      </div>
}</>
  );
}




// import axios from "axios";
// import { React, useEffect, useLayoutEffect, useRef, useState } from "react";
// import { BrowserRouter, Link, Route, Router } from "react-router-dom";
// import CardsDahboard from "../CardsDahboard/CardsDahboard";
// import ProductsTable from "../ProductsTable/ProductsTable";
// import "./Dashboard.css";
// import UsersTable from "./UsersTable/UsersTable";
// import Loader from '../../Loader/Loader';
// import { Redirect } from 'react-router-dom';
// import { useSelector } from "react-redux";
// export default function Dashboard() {
//   const [loading,setLoading]=useState(false);
//   useEffect(()=>{
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//     }, 1500);
//   },[])

  
//   const toggleRef = useRef();
//   const WrapperRef = useRef();
//   function togglebtn() {
//     WrapperRef.current.classList.toggle("toggled");
//   }

//   // use  state
//   const [productsDash, setproductsDash] = useState([]);
//   const [usersDash, setusersDash] = useState([]);

//   // use effect

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/foods")
//       .then((res) => {
//         setproductsDash(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [productsDash]);
//   // ----------------
//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/users/users-all")
//       .then((res) => {
//         console.log(res.data);
//         setusersDash(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [usersDash]);

//   const { user: currentUser } = useSelector((state) => state.auth);
//   if (!currentUser || currentUser.isAdmin !== true) {
//     return <Redirect to="/" />;
//   }
//   return (
//     <>
//     {loading ? <Loader/>:
//       <div className="d-flex" id="wrapper" ref={WrapperRef}>

//         <div className="bg-white" id="sidebar-wrapper">
//           <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
//             <i className="fas fa-user-secret me-2" />
//             Healthy Food
//           </div>
//           <div className="list-group list-group-flush my-3">
//             <Link
//               to="/admin"
//               className=" zzz  list-group-item list-group-item-action bg-success second-text active"
//             >
//               <i className="fas fa-tachometer-alt me-2" />
//               Dashboard
//             </Link>

//             <Link
//               to="/adminnavandside/products"
//               className=" zzz   list-group-item list-group-item-action bg-transparent second-text fw-bold"
//             >
//               <i className="fas fa-gift me-2" />
//               Products
//             </Link>

//             <Link
//               to="/adminnavandside/users"
//               className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
//             >
//               <i className="fas fa-solid fa-user me-2" />
//               Users
//             </Link>

//             {/* <Link
//               to="#"
//               className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
//             >
//               <i className="fas fa-power-off me-2" />
//               Logout
//             </Link> */}
//           </div>
//         </div>
//         {/* /#sidebar-wrapper */}

//         {/* Page Content */}
//         <div id="page-content-wrapper">


//             {/* nav */}
//             {/* <AdminNav/> */}
//           <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
//             <div className="d-flex align-items-center">
//               <i
//                 className="fas fa-align-left primary-text fs-4 me-3"
//                 id="menu-toggle"
//                 ref={toggleRef}
//                 onClick={togglebtn}
//               />
//               <h2 className="fs-2 m-0">Dashboard</h2>
//             </div>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
// {/*               
//               <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
//                 <li className="nav-item dropdown">
//                   <a
//                     className="nav-link dropdown-toggle second-text fw-bold  text-dark"
//                     href="#"
//                     id="navbarDropdown"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     <i className="fas fa-user me-2 text-dark" />
//                     John Doe
//                   </a>
//                   <ul
//                     className="dropdown-menu"
//                     aria-labelledby="navbarDropdown"
//                   >
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Profile
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Settings
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Logout
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul> */}
//             </div>
//           </nav>
//             {/* nav */}




//           <div className="container-fluid px-4">
//             <div className="row g-3 my-2">

//               {/* card 1 */}
//               <div className="col-md-6">
//                 <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
//                   <div>
//                     <CardsDahboard
//                       prod={productsDash}
//                       name={"Products"}
//                       prodLogo={
//                         <i
//                           className="fas fa-gift
//            fs-1 primary-text border rounded-full
//             secondary-bg p-3"
//                         />
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* card 1 */}
//               {/* card 2 */}

//               <div className="col-md-6">
//                 <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
//                   <div>
//                     <CardsDahboard
//                       prod={usersDash}
//                       name={"Users"}
//                       prodLogo={
//                         <i
//                           className="fas fa-user
//                           fs-1 primary-text border rounded-full
//                             secondary-bg p-3"
//                         />
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* card 2 */}

//             </div>



//             <div className="row my-5">

//                         <ProductsTable/>
//                         <UsersTable/>

//             {/* <Route  path="/admin/products" component={ProductsTable} /> */}



//             </div>
//           </div>
//         </div>
//       </div>
// }</>
//   );
// }