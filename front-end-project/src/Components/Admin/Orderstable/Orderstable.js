import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";

export default function OrdersTable() {
  const { id } = useParams();
  const [ordersDash, setodersDash] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/orders")
      .then((res) => {
        setodersDash(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    loadorders();
  }, [ordersDash]);

  const loadorders = async () => {
    const result = await axios.get(`http://localhost:4000/orders/${id}`);
    setodersDash(result.data);
  };

  const deleteorder = async (id) => {
    await axios.delete(`http://localhost:4000/orders/${id}`);
  };

  return (
    <>
      <h3 className="fs-4 mb-2 w-25">Recent orders</h3>
      <div></div>
      {/* <div className=" d-flex justify-content-end"><Link class="btn btn-warning w-25 mb-2 ms-2" to="/Meals/add">Add a order <GrAdd/> </Link></div> */}
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width={50}>
                #
              </th>
              <th scope="col">user name</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col">location</th>
              <th scope="col">Created at</th>
              <th scope="col">Total price</th>
              <th scope="col">Order Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">delete</th>

              {/* <th scope="col">Price</th> */}
            </tr>
          </thead>
          <tbody>
            {console.log(ordersDash)}
            {ordersDash.map((order, i) => {
              return (
                <>
                  <tr key={order._id}>
                    <th scope="row"> {i + 1} </th>
                    {/* <td><img src={`${order.username}`} style={{width:'100px'}} alt="..."/></td> */}
                    <td>{order.username}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{order.location}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.total}</td>
                    <td>
                      {order.orders.map((ord, i) => {
                        return (
                          <div>
                            
                            <span> {i + 1}- </span> {ord.name}
                            <br/>
                          </div>
                        );
                      })}
                    </td>

                    <td>
                      {order.orders.map((ord, i) => {
                        return (
                          <div>
                         
                            <span>Quan:</span> {ord.quantity ? ord.quantity: "1"}
                            <br/> <br/> 
                          </div>
                        );
                      })}
                    </td>
                                    <td>
                      <Link
                        class="btn btn-danger"
                        onClick={() => deleteorder(order._id)}
                      >
                        Delete
                      </Link>
                    </td>
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