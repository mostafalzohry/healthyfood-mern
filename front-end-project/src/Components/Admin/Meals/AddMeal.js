import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Loader from '../../Loader/Loader';
import {useEffect } from "react";



const AddMeal = () => {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])

  let history = useHistory();
  const [meal, setMeal] = useState({
    name: "",
    category: "",
    price:"",
    image:"",
    calories:""
  });

  const { name,category,price,image,calories} = meal;
  const onInputChange = e => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/foods", meal);
    history.push("/adminnavandside/products");
  };
  return (<>
  {loading ? <Loader/>:
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Meal</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg m-2"
              placeholder="Enter Meal image link"
              name="image"
              value={image}
              onChange={e => onInputChange(e)}
            />
            <input
              type="text"
              className="form-control form-control-lg m-2"
              placeholder="Enter Meal Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2"
              placeholder="Enter Meal Category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
             <input
              type="number"
              className="form-control form-control-lg m-2"
              placeholder="Enter Meal calories"
              name="calories"
              value={calories}
              onChange={e => onInputChange(e)}
            />
            <input
              type="number"
              className="form-control form-control-lg m-2"
              placeholder="Enter Meal Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="text-center"><button className="btn btn-danger btn-block w-50 ">Add Meal</button></div>
        </form>
      </div>
    </div>
}</>
  );
};

export default AddMeal;