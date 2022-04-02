import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";

export default function Vieworder() {
  const { id } = useParams();
  const [VieworderDash, setviewodersDash] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/orders")
      .then((res) => {
        setviewodersDash(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    loadorders();
  }, [VieworderDash]);



  const loadorders = async () => {
    const result = await axios.get(`http://localhost:4000/orders/${id}`);
    setviewodersDash(result.data);
  };





  return (
    <>

      
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width={50}>
                #
              </th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">location</th>

            </tr>
          </thead>
          <tbody>


            {VieworderDash?.map((vieworder, i) => {
              return (
                <>
                  <tr key={vieworder._id}>

                    <th scope="row"> {i + 1} </th>
                    <td>{vieworder.orders.name}</td>
                    <td>{vieworder.orders.price}</td>



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