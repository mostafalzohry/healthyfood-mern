import './textfield.css';
import Register from './register'
import food from './img/healthy-food-1.jpg'
import rocket from './img/rocket.png';
import Loader from '../Loader/Loader';
import { useState,useEffect } from "react";


function Regisiterpage() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])
  return (<>
  {loading ? <Loader/>:
    <div className='Loginpage'>
    <div className="container mt-3 mb-4">
      <div className="row">
        <div className="col-md-5">
          <Register />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={'https://img.freepik.com/free-photo/concept-healthy-food-sports-lifestyle-vegetarian-lunch-healthy-breakfast-proper-nutrition-top-view-flat-lay_2829-6082.jpg?w=1060&t=st=1648048476~exp=1648049076~hmac=549e330d740848a7e329c2ea8ad5e41ebbdbfe524038d477e93fe0fb7499e9bc'} alt=""/>
        </div>
      </div>
    </div>
    </div>
}</>
  );
}

export default Regisiterpage;
