import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Dashboardagg } from './Dashboardagg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigationlogin } from './Navigationlogin';
import Authentication from './Authentication';
import SearchHospital from './SearchHospital';
import HospitalSearch from './components/HospitalSearch.';

//import Cards from './Cards';




ReactDOM.render(
  <React.StrictMode>
   
   
    <Authentication/>
    
    

   
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
