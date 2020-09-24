import React, { Component } from 'react';
import Title from './Title.js';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
  state = {
    services: [],
  };
  render() {
    return (
      <div>
        <Title title="services"></Title>
      </div>
    );
  }
}
