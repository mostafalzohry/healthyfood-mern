import "./CheckOut.css";
import { useState } from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import CashOnDelivery from "./CashOnDelivery";
import Loader from '../Loader/Loader';
import {useEffect} from "react";
import Paypal from "./Paypal";

const CheckOut = () => {
  //   const [checked, setChecked] =  useState('paypal');

  //  const changeHandler = e => {
  //      setChecked(e.target.value)
  //  }
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])



  return (<>
  {loading ? <Loader/>:
    <div className="checkout-section container py-3">
      <h2> Choose your preferred payment method </h2>

      <div className="row">

        <div className="col-3">
          <ul className="list-unstyled payment-options ">
            <li className="mb-4 mt-2" >
              <Link to="/checkout/cashOnDelivery">Cash On Delivery</Link>
            </li>
            <li >
              <Link to="/checkout/paypal">Pay with Paypal</Link>
            </li>
          </ul>
        </div>

        <div className="col">
              <Route
                path="/checkout/cashOnDelivery"
                component={CashOnDelivery}
              />
              <Route path="/checkout/paypal" component={Paypal} />
        </div>

      </div>
    </div>
}</>);
};

export default CheckOut;