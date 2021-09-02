import React from 'react';
import "./styles.scss";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function App(){
  return(
    <div className="app">
      <Routes></Routes>
      <ToastContainer autoClose={3000} />
    </div>
  )
}
