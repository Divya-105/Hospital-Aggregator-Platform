import axios from 'axios';
import React, { Component } from 'react'

import * as ReactDOM from "react-dom";

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css';
import "./search.css";


const App = () => {
   
  
          return (

            <div className="home-main">
      
        <div className="search-hospital">
          <form className="d-flex justify-content-center" >
            <input 
            type="text"
            className="form-control search-form-control"
            placeholder = "Enter name of the hospital "
            />
            <button type="submit" className="ml-2 btn btn-danger btn-sm">
               Search
            </button>
          </form>
          <ul className="list-group search-hospital-list-group ">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  
</ul>
        </div>

    </div>

);
}


    {/*
          <div className="testimonials" style={{ margin: `10px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
      <div className="e-card e-card-horizontal testimonial-col" style={{ width: `80%` }} > 
          <img src="https://tse3.mm.bing.net/th?id=OIP.wyj5lj4hydqbtwKcC3HYdgHaFK&pid=Api&P=0&w=252&h=177" 
          alt="Sample" style={{ height: `100px` }} width='100%'/>
          <div className="e-card-stacked">
              <div className="e-card-header">
                  <div className="e-card-header-caption">
                      <h2 className="e-card-header-title font-size-xxl" >Hospital Name</h2>
                  </div>
              </div>
              <div className="e-card-content"  >
                  Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
                  than 4 ordinary trimmers.
              </div>
          </div>
      </div>
    </div>*/}
    
   

export default App