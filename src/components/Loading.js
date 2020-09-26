import React, { Component } from 'react';
import loadingGIF from '../images/gif/loading-gear.gif';
export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h4>Rooms data loading...</h4>
        <img src={loadingGIF} alt="Loading..."></img>
      </div>
    );
  }
}
