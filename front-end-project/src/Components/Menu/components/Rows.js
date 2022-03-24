import React from "react"
import IncDecCounter from "../pages/icrement/inc"
import { useState } from "react";
import '../../Menu/Menu.css'




function Rows (props){


    const [input, setInput] = useState(1); 

    const handleInputValue = e => {
        props.onChangeInputValue(e.target.value, props.id);
        setInput(e.target.value)
    }

    return(
        <>
            <tr>
               
                <td className="col-3">
                    <div>
                    <img className="myimg" src={props.img}/>   
                    </div>
                </td>  
                <td >{props.name}</td>
                <td>{props.price}</td>
                <td className="count">
                <input type="number" id='myinput' min="1" value={input} onChange={handleInputValue} />
                </td>
                <td>{
                         (input==null)? props.price :
                         props.price*input 
                }</td>
                <td >
                    <button type="button"  className="add btn btn-danger" onClick={()=>{props.remove(props.id)}} >
                        <i className="far fa-star"></i> Remove From Cart  </button>
                </td>

            </tr>
        </>
    )

}
export default Rows