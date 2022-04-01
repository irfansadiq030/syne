import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
// import $ from 'jquery-ui';


ReactDOM.render(
  <App />,

  document.getElementById("root")
 
);

$(document).ready(function() {

  
});

$(document ).ready(function() {

  $( function() {
    $( "#datepicker" ).datepicker();
  });


  $('#datepickericon').click(function(e){
    console.log('inside click');
    $('#datepicker').focus();

    });


   
 

    
});



