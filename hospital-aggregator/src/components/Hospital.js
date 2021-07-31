import React from 'react';
import {
  Card, CardText,CardImg, CardBody,
  CardTitle, CardSubtitle, Button,Container
} from 'reactstrap';

function Hospital ({Hospital})
{
    return(
      <Card className="text-center my-2" style  = {{background:"Cornsilk"}}>
      <CardImg width={20} height={400} src={Hospital.image}/>
        <CardBody className ="my-1">
          <CardTitle><h3>{Hospital.name} Hospital</h3><h4>City: {Hospital.city}</h4></CardTitle>
          <CardSubtitle><h5>No. of beds available: {Hospital.num} </h5><h5>This hospital is specialised in {Hospital.spec}.</h5></CardSubtitle>
          <CardText><h5 style={{display: "inline"}}>About Us :-</h5> A hospital is a health care institution providing patient treatment with specialized 
                    <br/>medical and nursing  staff and medical equipment. The best known type 
                    <br/>of the hospital is the general hospital, which typically has an emergency 
                    <br/>department to treat urgent health problems ranging from fire, accident 
                    <br/>victims to a sudden illness.  </CardText>
          <Container>
            <Button color = 'success'>Accept</Button>{'  '}
            <Button color="danger">Reject</Button>
          </Container>
        </CardBody>
      </Card>
    );
}

export default Hospital;