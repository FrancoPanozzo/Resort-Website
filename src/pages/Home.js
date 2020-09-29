import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero>
          <Banner title="Luxurious rooms" subtitle="the best view in town">
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </>
    );
  }
}
