import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useParams } from "react-router-dom";
import{GrAdd} from"react-icons/gr";

export default function ProductsTable() {
  const { id } = useParams();
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
      loadMeals();
  }, [productsDash]);

  

  const loadMeals = async () => {
    const result = await axios.get(`http://localhost:4000/foods/${id}`);
    setproductsDash(result.data);
  };


  const deleteMeal= async id=>{
      await axios.delete(`http://localhost:4000/foods/${id}`);
      loadMeals();
  };
  return (
    <>
   
      <h3 className="fs-4 mb-2 w-25">Recent Products</h3>
      <div className=" d-flex justify-content-end"><Link class="btn btn-warning w-25 mb-2 ms-2" to="/Meals/add">Add a Meal <GrAdd/> </Link></div>
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width={50}>
                #
              </th>
              <th scope="col">Product image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Calories</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>

    
            {productsDash.map((product, i) => {
              return (
                <>
                  <tr key={product._id}>
                    <th scope="row"> {i+1} </th>
                    <td>{product.image}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.calories}</td>
                    <td>{product.price}</td>
                    <td><Link class="btn btn-success" to={`/Meals/edit/${product._id}`}>Edit</Link></td>
                    <td><Link class="btn btn-danger" onClick={()=>deleteMeal(product._id)}>Delete</Link></td>
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
