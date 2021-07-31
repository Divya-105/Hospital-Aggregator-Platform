import axios from "axios";
import React from "react";
import { Component } from "react";
import CitySearch from "./Cities/CitySearch";



import "./search.css";


const App = (st) => {

  const{search}= CitySearch();

  return(
    <div className="home-main">
      
        <div className="search-hospital">
          <form className="d-flex justify-content-center" >
            <input 
            type="text" id='name' name="name"
            className="form-control search-form-control"
            placeholder = "Enter name of the hospital "
            
              
            
            />
            <button type="submit" onClick={()=> searchHospital(st.name)} className="ml-2 btn btn-danger btn-sm">
               Search
            </button>
          </form>
        {/*}  <ul className="list-group search-hospital-list-group " >
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  
          </ul>*/}
        </div>

    </div>
  );

}

export default  App

function searchHospital(name: any):void {
   axios.post(`http://localhost:7071/getHospitalByName/${name}`)
}