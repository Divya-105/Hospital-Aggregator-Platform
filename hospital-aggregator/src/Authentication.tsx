import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import { AccountCircle } from "@material-ui/icons";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import AllHospitals from "./components/AllHospitals";
import Mailer from "./components/mailer";
import { Dashboardagg } from './Dashboardagg';
import { AdminDashboard } from './components/AdminDashboard';
import SearchHospital from './SearchHospital';
import {Navigationlogin} from './Navigationlogin';
import { LoginHospi } from "./LoginUser";



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
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      value: 0
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
   const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>
                {/* <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
               <Button href="/Home" color='inherit'>
                  <Typography><strong>Hospital Aggregator</strong></Typography>
    </Button>*/}
                <Button href="/Dashboardagg" color='inherit'>
                  <strong>Home</strong>
                </Button>
                <Button href="/AdminDashboard" color='inherit'>
                  <strong>Admin</strong>
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
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={{'backgroundColor': 'LightCyan', 'color': 'Black'}} elevation={0}>
                  <Button href="/LoginHospi" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
              )}
            </Toolbar>
          </AppBar>

         
          <div className='text-center my-3'>
            <SearchHospital/>
          </div>

          <div>
            <Switch>
              <Route exact path={["/SearchHospital", "/Dashboardagg"]} component={Dashboardagg} />
              <Route exact path="/LoginHospi" component={LoginHospi} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/AdminDashboard" component={AdminDashboard} />
              <Route path="/mail"  component={Mailer}/>
              <Route path="/Home"  component={Home}/>
              

            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default Authentication;