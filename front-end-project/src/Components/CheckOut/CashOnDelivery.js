import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import TotalContext from './../../store/total-context';
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import MealsContext from './../../store/meals-context';



const CashOnDelivery = () => {

    const ctx = useContext(TotalContext);

    const mealsCtx = useContext(MealsContext);
    console.log(mealsCtx.meals);

    const [values, setValues] = useState({
        location: "",
        phone: ""
    })

    const [errors, setError] = useState({
        locationError: "",
        phoneError: ""
    })

    const changeData = (e) => {
        if (e.target.name === "location") {
            setValues({
                ...values,
                location: e.target.value
            })
            setError({
                ...errors,
                locationError:
                    e.target.value.length === 0 ?
                        "this location is required" : null
            })
        } else if (e.target.name === "phone") {
            setValues({
                ...values,
                phone: e.target.value
            })
            var regexPhone = new RegExp(/^01[0125][0-9]{8}$/gm);
            var validPhone = regexPhone.test(e.target.value);
            setError({
                ...errors,
                phoneError:
                    e.target.value.length === 0 ?
                        "this phone is required"
                        : !validPhone ?
                            "012 XXXXXXXX OR 011 XXXXXXXX OR 010 XXXXXXXX"
                            : null
            })
        }
    }

    const { location, phone } = values

    const { user: currentUser } = useSelector((state) => state.auth);

    var email = currentUser.email;
    var username = currentUser.username;
    var total = ctx.totalPrice;
    var message = `you have just purchased products from our website. Wait for us to contact you and send the product as soon as possible and you have bought meals for value = ${ctx.totalPrice}  `
    var orders = mealsCtx.meals;
    // var id = currentUser.id 


    const handleMessage = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/order/ordermail', { email, message , orders})
            .then(() => {
                toast.success("We Receive Your Order")
            })

        axios.post('http://localhost:4000/orders', { username, email, location, phone, total , orders})
            .then(() => {
                console.log("send order")
            })

    }

    return (
        <div>
            <h3 className="d-inline-block " > You'll be charged {ctx.totalPrice} </h3>
            <br />
            <form onSubmit={handleMessage}>
                <input onChange={(e) => changeData(e)} value={values.location} type="text" name="location" class="form-control" placeholder="Location" />
                <div className="text-danger py-2">{errors.locationError}</div>
                <br />
                <input onChange={(e) => changeData(e)} value={values.phone} type="number" name="phone" class="form-control" placeholder="Phone" />
                <div className="text-danger py-2">{errors.phoneError}</div>
                <br />
                <button type='submit' className="btn btn-success" disabled={errors.locationError || errors.phoneError}> Confirm Order </button>
            </form>
            <ToastContainer />

        </div>
    );
}

export default CashOnDelivery;