import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Loader from '../../Loader/Loader';


const EditMeal = () => {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500);
    },[])


  let history = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    loadMeal();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/foods/${id}`, meal);
    history.push("/adminnavandside/products");
  };

  const loadMeal = async () => {
    const result = await axios.get(`http://localhost:4000/foods/${id}`);
    setMeal(result.data);
  };
  return (
      <>
      {loading ? <Loader/>:
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Meal</h2>
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
          <div className="text-center"><button className="btn btn-danger btn-block w-50 ">Edit Meal</button></div>
        </form>
      </div>
    </div>
}</>
  );
};

export default EditMeal;