import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import Error404 from './pages/Error404';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:roomName" component={Room} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
