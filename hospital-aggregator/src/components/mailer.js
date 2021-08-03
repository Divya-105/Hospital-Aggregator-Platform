import { Button } from "reactstrap";
import emailjs from "emailjs-com";
const Mailer=()=>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            "service_v54jzmo",
            "template_1pqzent",
            e.target,
            "user_lnzv07Hbw3AB6JJQUo6qI"
        ).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return(
        <div className='container border'
              style={{marginTop:"50px",
              width:'50%'
              }}>
          <h1>Enquiry Form</h1>
          <form className='row' 
              style={{margin:"25px 85px 75px 100px"}}
              onSubmit={sendEmail}>
                  
              <label> Email of patient </label> 

              <input type='email' name='name' className="form-control" />

              <label> Email of Hospital </label>
              <input type='email' name='user_email' className="form-control" />

              

              <label> Message </label>
              <textarea name='message' rows='4' className="form-control" />
              
              <input type='submit' value=' send' 
              className="form-control btn btn-primary" 
              style={{marginTop:"30px"}}

              
              />
              
       
          </form>
       
        </div>
    );
};

export default Mailer;