import React from "react"
import { Jumbotron,Container } from 'reactstrap';

function Header()
{
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
        </div>
    );
}

export default Header;
