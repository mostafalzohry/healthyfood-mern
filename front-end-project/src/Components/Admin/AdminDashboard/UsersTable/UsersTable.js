import axios from 'axios';
import React, { useEffect, useState } from 'react'

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



  return (
    <>
       <h3 className="fs-4 mb-3">Recent Users</h3>
       <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width={50}>
                        #
                      </th>
                      <th scope="col">User Name  </th>
                      <th scope="col">Email</th>
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
                            <td>{user.createdAt}</td>
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
