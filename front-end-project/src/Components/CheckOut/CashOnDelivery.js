import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import TotalContext from './../../store/total-context';

const handleMessage = () => {


    toast.success("We receive your order")

}

const CashOnDelivery = () => {

    const ctx = useContext(TotalContext);

    return (
        <div>
            <h3 className="d-inline-block mx-4" > You'll be charged {ctx.totalPrice} </h3>
            <button className="btn btn-success" onClick={handleMessage}> Confirm Order </button>
            <ToastContainer />

        </div>
    );
}

export default CashOnDelivery;