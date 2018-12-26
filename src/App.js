import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import User from './User';
import Fetch from './Fetch';
import Nav from './Nav';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Buy from './Buy';
import Contact from './Contact';
import Filter from './Filter';

class App extends Component {

  state = {
    users: []
  }

  handleNewUser = (user) => {
      let users = [...this.state.users, user];
      this.setState({
        users: users
      })
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Nav />
            <Form handleNewUser={this.handleNewUser} />
            <User users={this.state.users} />
            <Fetch />
            <Switch>
              <Route path='/' exact component={Form} />
              <Route path='/home' component={Home} />
              <Route path='/about/:user_id' component={About} />
              <Route path='/buy' component={Buy} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
        <Filter />
      </React.Fragment>
    );
  }
}

export default App;
