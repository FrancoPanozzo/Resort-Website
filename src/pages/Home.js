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
          <Banner
            title="Luxururious rooms"
            subtitle="Deluxe rooms starting at $299"
          >
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
