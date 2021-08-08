import { useState } from "react";
import Hospital from "./Hospital";
import max from "../images/max.jpeg";
import yashoda from "../images/yashoda.jpeg";
import apollo from "../images/apollo.jpeg";
import aiims from "../images/aiims.jpeg";
import fortis from "../images/fortis.jpeg";
import { Jumbotron,Container } from 'reactstrap';



function AllHospitals()
{
    const [hospitals]=useState([
        {name:"Max", spec:"Heart Surgery",num:"500",image: max,city:"Pune"},
        {name:"Yashoda", spec:"Eye Surgery",num:"800", image:yashoda, city:"Hyderabad"},
        {name:"Apollo", spec:"Cancer Specialist",num:"1000", image:apollo,city:"Mumbai"},
        {name:"AIIMS", spec:"ENT,Kidney Surgery",num:"600",image:aiims,city:"Delhi"},
        {name:"Fortis Escorts", spec:"Heart Surgery",num:"200",image:fortis,city:"Noida"}
    ])

    return(
        <div>
        <Jumbotron  className="text-center my-3" >
                <Container style={{background:"LightCyan"}}>
                    <h1><h1 className="my-1">Welcome Admin</h1></h1>
                    <h5>There are some hospitals available 
                    who want to register with the website</h5>
                    <hr/>

                </Container>
        </Jumbotron>
    
        <div className="mx-5">
            <h1>All Hospitals</h1>
            <p>List of Hospitals are as follows</p>

            {
                hospitals.length>0
                ? hospitals.map((item) => <Hospital Hospital = {item} />): "No Hospital Available"
            }
        </div>
        </div>
    );
}

export default AllHospitals;