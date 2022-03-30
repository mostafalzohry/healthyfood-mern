import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import TotalContext from './../../store/total-context';
import { useSelector } from "react-redux";
import axios from "axios";



const CashOnDelivery = () => {

    const ctx = useContext(TotalContext);

    const { user: currentUser } = useSelector((state) => state.auth);
    const FavMen = useSelector((state) => { return state.cartreducer.menu })
    console.log(FavMen)
    var email = currentUser.email;
    var message = `you have just purchased products from our website. Wait for us to contact you and send the product as soon as possible  , I have bought meals for value = ${ctx.totalPrice}`
    const handleMessage = () => {
        axios.post('http://localhost:4000/order/ordermail',{email , message})
        .then(()=>{
            toast.success("We Receive Your Order")
        })
    }

    return (
        <div>
            <h3 className="d-inline-block mx-4" > You'll be charged {ctx.totalPrice} </h3>
            <button className="btn btn-success" onClick={handleMessage}> Confirm Order </button>
            <ToastContainer />

        </div>
    );
}

export default CashOnDelivery;