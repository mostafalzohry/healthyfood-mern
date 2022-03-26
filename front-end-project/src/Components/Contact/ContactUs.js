import React from "react";
import "./contact-us.css";
import Inputemail from "./InputEmail";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../Loader/Loader';
import { useState,useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';


export default function ContactUs() {
  const[values , setValues] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
}) 

// const [loading,setLoading]=useState(false);
// useEffect(()=>{
//   setLoading(true)
//   setTimeout(() => {
//     setLoading(false)
//   }, 1500);
// },[])





const changeData = (e) => {
    if(e.target.name === "name"){
        setValues({
            ...values,
            name: e.target.value
        })
    }else if(e.target.name === "email"){
        setValues({
            ...values,
            email: e.target.value
        })
    }
    else if(e.target.name === "subject"){
        setValues({
            ...values,
            subject: e.target.value
        })
    }
    else if(e.target.name === "message"){
        setValues({
            ...values,
            message: e.target.value
        })
    }
}
const {email,subject,message} = values
console.log(values)
const handleMessage = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:4000/gmail/sendmail',{email,subject,message})
    .then(()=>{
        toast.success("Thanks Send Message")
    })
}


  return (<>
    <div className="contact-us-section">
      <div className="container-fluid p-0">
        <div className="contact-us section ">
          <div>
            <h2>CONTACT US</h2>
          </div>

          <div>
            {/* <a>Home</a>
            <span> &gt; </span> */}
            <span>Don't Hesitate to Contact us</span>
          </div>
        </div>
      </div>

      
      <div className="container xx">
        <h3 className="my-4  text-center "> Contact Information</h3>

        <form onSubmit={handleMessage}         
 id="contact-form" name="contact-form" method="POST">

        <div className="row">
          <div className="col-md-6 col-sm-12">
            {/* <input className="" type="text" placeholder="Name" /> */}
            <input onChange={(e)=> changeData(e)} value={values.name} type="text" id="name" name="name" class="form-control" placeholder="Name"/>

          </div>
          <div className="col-md-6 col-sm-12">
          <Inputemail />
            {/* <input className="" type="email" placeholder="Email" /> */}
            {/* <input onChange={(e)=> changeData(e)} value={values.email} type="text" id="email" name="email" class="form-control" placeholder="email"/> */}

          </div>
        </div>

        <div className="row">
          {/* <div className="col-md-6 col-sm-12">
            <input className=" " type="number" placeholder="Phone" />
          </div> */}
          <div className="col-md-12 col-sm-12">
            {/* <input className="" type="text" placeholder="Subject" /> */}
            <input onChange={(e)=> changeData(e)} value={values.subject} type="text" id="subject" name="subject" class="form-control" placeholder="Subject"/>

          </div>
        </div>

        <div className="row">
          <div className="col-12">
          <textarea onChange={(e)=> changeData(e)} value={values.message} type="text" id="message" placeholder="Message" name="message" rows="2" class="form-control md-textarea"></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <button className="btn-submit mb-3 " type="submit">
            
              send
            </button>

          </div>
        </div>
        </form>
      </div>
      <ToastContainer />

    </div>
</>
    
  );
}