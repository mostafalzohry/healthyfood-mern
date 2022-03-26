import { useContext } from "react";
import TotalContext from './../../store/total-context';


const CashOnDelivery = () => {

const ctx = useContext(TotalContext);

    return ( 
        <div>
            <h3 className="d-inline-block mx-4" > You'll be charged {ctx.totalPrice} </h3>
            <button className="btn btn-primary"> Confirm Order </button>
        </div>
     );
}
 
export default CashOnDelivery;