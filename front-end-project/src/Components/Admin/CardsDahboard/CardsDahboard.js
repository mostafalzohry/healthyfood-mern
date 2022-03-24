import React from "react";

export default function CardsDahboard(props) {
  return (
    <>
      <div>
        <p className="fs-5">
          
          <span className="fs-2"> {props.prod.length} </span> {props.name}
        </p>
        {props.prodLogo}
      
      </div>

      {/* fa-gift */}

      {/*       
          <div>
            <h3 className="fs-2">{props.users.length} </h3>
            <p className="fs-5">Users</p>
          </div>
          <i className="fas fa-us 
          fa-solid fa-user 
          fs-1 primary-text border
           rounded-full secondary-bg 
           p-3" /> */}
    </>
  );
}
