import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Footer from "./components/Footer";
import AllHospitals from "./components/AllHospitals";
import Mailer from "./components/mailer";
import { Dashboardagg } from './Dashboardagg';
import { AdminDashboard } from './components/AdminDashboard';
import SearchHospital from './SearchHospital';
import {Navigationlogin} from './Navigationlogin';
import { LoginHospi } from "./LoginUser";
import lgin from "./components/lgin";
import hopilog from "./components/hopilog";
import { HospitalList } from "./HositalList";
import signup from "./components/signup";
import Ron from "./components/Ron";






const style = {
  paper: {
    flexGrow: 1,
    backgroundColor: 'LightCyan',
    color: 'Black'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "LightCyan"
  }
}


class Authentication extends Component <{},any>{
  constructor(props) {
    super(props);
    

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      value: 0
    };
  }

 

  

  render() {
   const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>
           
                <Button href="/HospitalList" color='inherit'>
                  <strong>Home</strong>
                </Button>
               
                <Button href="/mail" color='inherit'>
                  <strong>Enquiry</strong>
                </Button>

                


                
               
                {showModeratorBoard && (
                  <Button href="/mod" color='inherit'>
                    <strong>Moderator Board</strong>
                  </Button>
                )}
                
                {showAdminBoard && (
                  <Button href="/admin" color='inherit'>
                    <strong>Admin Board</strong>
                  </Button>
                )}
                {currentUser && (
                  <Button href="/user" color='inherit'>
                    <strong>User</strong>
                  </Button>
                )}
              </Paper>
              
              {currentUser ? (
                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>

                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                 
                </Paper>
              ) : (
                <Paper style={{'backgroundColor': 'LightCyan', 'color': 'Black'}} elevation={0}>

<Button href="/lgin" color='inherit'>
                  <strong>Admin login</strong>
                </Button>
                  
              
              
                <Button href="/hopilog" color='inherit'>
                <strong>Hospital Login</strong>
              </Button>

             

              
              <Button href="/Ron" color='inherit'>
                <strong>Hospital Signup</strong>
              </Button>

             

             
              </Paper>
              )}
            </Toolbar>
          </AppBar>

       

          <div>
            <Switch>
              <Route exact path={["/SearchHospital", "/Dashboardagg"]} component={Dashboardagg} />
              <Route exact path="/Navigationlogin" component={Navigationlogin} />
              
              
            
              
              <Route path="/AdminDashboard" component={AdminDashboard} />
              <Route path="/mail"  component={Mailer}/>
              
              <Route path="/lgin"  component={lgin}/>
              <Route path="/hopilog"  component={hopilog}/>
              <Route path="/HospitalList"  component={HospitalList}/>
             
              <Route path="/Ron"  component={Ron}/>
              
            

            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default Authentication;