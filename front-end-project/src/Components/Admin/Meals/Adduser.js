import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Loader from '../../Loader/Loader';
import {useEffect } from "react";
import { register } from "../../../store/actions/auth";
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { TextFieldadmin } from './textfieldadmin';
import { Formik, Form } from 'formik';
import { Redirect } from 'react-router-dom';
import "./textfieldadmin.css"



const Adduser = (props) => {


    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch()
  
    const validate = Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(5, 'must be more than 5')
        .matches(/^[A-Z]/, "must start with capital letter")
  
        
        .required('Required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 charaters')
        .required('Password is required'),
        // .matches(
        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //   "Contain One Uppercase, lowercase, Number, Special Char"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })
    const handleRegister = (e) => {
      setSuccessful(false);
      console.log(e.username)
      dispatch(register(e.username, e.email, e.password))
        .then(() => {
          setSuccessful(true)
          props.history.push("/adminnavandside/users");
        //   window.location.reload();
  
        })
        .catch(() => {
          toast.error(message)
        });
    };
  
    if (successful) {
      return <Redirect to="/adminnavandside/users" />;
    }
    return (
      <>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validate}
          onSubmit={handleRegister}
        >
          {formik => (
            <div className="adduser">
              <h1 className="my-4 font-weight-bold .display-4">Add user</h1>
              <Form>
                <TextFieldadmin label="User Name" name="username" type="text" Placeholder ="Enter username"/>
  
                <TextFieldadmin label="Email" name="email" type="email" Placeholder="enter email" />
                <TextFieldadmin label="password" name="password" type="password" Placeholder="enter password" />
                <TextFieldadmin label="Confirm Password" name="confirmPassword" type="password"  Placeholder="repeat your password"/>
                <button className="btn btn-success mt-3 me-3 btnn" type="submit" disabled={!formik.isValid}>Add user</button>
                {/* <button className="btn btn-danger mt-3 " type="reset">Reset</button> */}
              </Form>
            </div>
          )}
        </Formik>
  
        <ToastContainer />
      </>
    )
  }
//   const [loading,setLoading]=useState(false);
//   useEffect(()=>{
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//     }, 1500);
//   },[])

//   let history = useHistory();
//   const [user, setuser] = useState({
//     username: "",
//     email: "",
//     password:"",
//     confirmpassword:""
//   });

//   const { username,email,password,confirmpassword} = user;
//   const onInputChange = e => {
//     setuser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post("http://localhost:4000/register", user);
//     history.push("/adminnavandside/users");
//   };
//   return (<>
//   {loading ? <Loader/>:
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add A user</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//           <input
//               type="text"
//               className="form-control form-control-lg m-2"
//               placeholder="Enter username"
//               name="username"
//               value={username}
//               onChange={e => onInputChange(e)}
//             />
//             <input
//               type="email"
//               className="form-control form-control-lg m-2"
//               placeholder="Enter your email"
//               name="email"
//               value={email}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control form-control-lg m-2"
//               placeholder="Enter your password"
//               name="password"
//               value={password}
//               onChange={e => onInputChange(e)}
//             />
//              <input
//               type="password"
//               className="form-control form-control-lg m-2"
//               placeholder="Repeat your password"
//               name="confirmpassword"
//               value={confirmpassword}
//               onChange={e => onInputChange(e)} 
//             />
          
//           </div>
//           <div className="text-center"><button className="btn btn-danger btn-block w-50 ">Add user</button></div>
//         </form>
//       </div>
//     </div>
// }</>
//   );
// };

export default Adduser;