import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import axios from 'axios';

// Request API.
axios
  .get('/products', {
  })
  .then(response => {
    // Handle success.
    console.log('Data: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
ReactDOM.render(<App />, document.getElementById("app"));
