import React from "react";
import Spinner from "./Spinner.module.css";
import spinner from './spinner.gif'
export default function LoadingSpinner() {
  return (

        <img className={Spinner.spin} src={spinner}/>
   
  );
} 