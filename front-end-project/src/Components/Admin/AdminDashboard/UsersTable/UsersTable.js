import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {useParams } from "react-router-dom";
import{GrAdd} from"react-icons/gr";

export default function UsersTable() {
    const [usersDash, setusersDash] = useState([]);


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

      const deleteUser= async id=>{
        await axios.delete(`http://localhost:4000/users/users-all/${id}`);
    };

  

  return (
    <>
       <h3 className="fs-4 mb-3">Recent Users</h3>
       <div className=" d-flex justify-content-end"><Link class="btn btn-warning w-25 mb-2 ms-2" to="/users/add">Add a user <GrAdd/> </Link></div>

       <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width={50}>
                        #
                      </th>
                      <th scope="col">User Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">CreatedAt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersDash.map((user , i) => {
                      return (
                        <>
                        
                          <tr key={user._id}>
                            <th scope="row">  {i+1} </th>
                            <td> {user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin =="true" ? "Admin" : "User"}</td>
                            <td>{user.createdAt}</td>
                            {/* <td><Link class="btn btn-success" to={`/Meals/edit/${user._id}`}>Edit</Link></td> */}
                    <td><Link class="btn btn-danger" onClick={()=>deleteUser(user._id)}>Delete</Link></td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
  
    </>
  )
}
