// import axios from "axios";
// const API_URL = "http://localhost:4000/users/";
// const register = (username, email, password) => {
//   return axios.post(API_URL + "register", {
//     username,
//     email,
//     password,
//   });
// };
// const login = (email, password) => {
//   return axios
//     .post(API_URL + "login", {
//       email,
//       password,
//     })
//     .then((response) => {
//       if (response.data.token) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }
//       return response.data;
//     });
// };
// const logout = () => {
//   localStorage.removeItem("user");
// };
// export default {
//   register,
//   login,
//   logout,
// };


import axios from "axios";
import {useEffect } from "react";
const API_URL = "http://localhost:4000/users/";

const register = (username, email, password ,isAdmin) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
    isAdmin
  });
};


const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data && response.data.token) {
        axios.get(API_URL + "profile", { headers: { Authorization: 'Bearer ' + response.data.token } })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
        })
      }
      return response.data
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};