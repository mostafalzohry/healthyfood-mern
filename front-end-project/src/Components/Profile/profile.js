import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import { useState,useEffect } from "react";

const Profile = () => {
    const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>
    //       <strong>{currentUser.username}</strong> Profile
    //     </h3>
    //   </header>
    //   <p>
    //     <strong>Email:</strong> {currentUser.email}
    //   </p>
    //   {/* <p>
    //     <strong>password:</strong> {currentUser.password}
    //   </p> */}
    //    <p>welcome  {currentUser.username} now you can make your orders  <Link to="/allmeals" class="nav-link">products</Link></p>
    // </div>
    <>
    {loading ? <Loader/>:
    <div className="container-fluid mt-100">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    {/* <h5>Cart</h5> */}
                </div>
                <div className="card-body cart">
                    <div className="col-sm-12 empty-cart-cls text-center"> <img src="http://www.fao.org/fileadmin/templates/experts-feed-safety/images/profile-img03.jpg" width="130" height="130" className="img-fluid mb-4 mr-3"/>
                        <h3><strong>{currentUser.username}</strong></h3>
                    <p>
           <strong>Email:</strong> {currentUser.email}
                     </p>
                     {currentUser.isAdmin !== "true" ? (
                          <>
                          <h4> now you can make your orders </h4>
                          <Link to="/allmeals" className="btn btn-success cart-btn-transform m-3" data-abc="true">continue shopping</Link>  </>
                          ) : (
                          <Link to="/admin" className="btn btn-success"> Go to Dashboard</Link>
                        )}    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}</>
  );
};
export default Profile;  


