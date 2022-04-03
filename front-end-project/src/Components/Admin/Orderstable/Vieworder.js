import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";

export default function Vieworder() {
  const params = useParams();
  const [VieworderDash, setviewodersDash] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/orders/${params.id}`)
      .then((res) => {
        setviewodersDash(res.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [VieworderDash]);





  return (
    <>

      {/* <h3 className="fs-4 mb-2 w-25">Recent orders</h3> */}
      {/* <div className=" d-flex justify-content-end"><Link class="btn btn-warning w-25 mb-2 ms-2" to="/Meals/add">Add a order <GrAdd/> </Link></div> */}
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width={50}>
                #
              </th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Calories</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>

            </tr>
          </thead>
          <tbody>


            {VieworderDash.map((vieworder , i) => {
              return (
                <>
                  <tr>
                    <th scope="row"> {i+1} </th>
                    <td><img src={`${vieworder.image}`} style={{width:'100px'}} alt="..."/></td>
                    <td>{vieworder.name}</td>
                    <td>{vieworder.price}</td>
                    <td>{vieworder.category}</td>
                    <td>{vieworder.quantity}</td>
                    <td>{vieworder.totalPrice}</td>
                  </tr>
                </>
              );

            })}
          </tbody>
        </table>
      </div>
    </>
  );
}