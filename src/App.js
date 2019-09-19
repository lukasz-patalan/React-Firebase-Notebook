import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import './App.css';
import fire from "./config/fire"
import Register from "./components/Register"
import Login from "./components/Login"
import Create from "./components/Create"
import Projects from "./components/Projects"
import Nav from "./components/Nav"


class App extends React.Component {
  state = {
    user: null
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        })
      } else {
        this.setState({ user: null })
      }
    })

  }

  logOut = () => {
    fire.auth().signOut()

  }
  render() {

    const router = <Switch>
      {this.state.user ? <Route path="/" exact component={null} /> : <Route path="/" exact component={Register} />}
      <Route path="/login" component={Login} />
      <Route path="/create" component={Create} />
      <Route path="/projects" exact component={Projects} />
    </Switch>
    return (
      <Router>
        <Nav user={this.state.user} logout={this.logOut} />
        {this.state.user ? <Create userUid={this.state.user.uid} userMail={this.state.user.email} /> : null}
        <div className="router">
          {router}
        </div>



      </Router>


    )







  }
}

export default App;

