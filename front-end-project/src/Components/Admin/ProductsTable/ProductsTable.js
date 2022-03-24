import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductsTable() {
  const [productsDash, setproductsDash] = useState([]);
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
  return (
    <>
      <h3 className="fs-4 mb-3">Recent Products</h3>
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width={50}>
                #
              </th>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>

    
            {productsDash.map((product, i) => {
              return (
                <>
                  <tr key={product._id}>
                    <th scope="row"> {i+1} </th>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
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
