import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "./authHeader";
const API_URL = "http://localhost:4000/users/";

const getUserBoard = () => {
  return axios.get(API_URL + "profile", { headers: authHeader() })
  .then(
    (response) => {
      localStorage.setItem("using", JSON.stringify(response.data));
    },
    (error) => {
      const _content =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
    }
  );
};

export default {
  getUserBoard
};
