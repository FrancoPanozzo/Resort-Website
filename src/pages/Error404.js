import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
export default class Error404 extends Component {
  render() {
    return (
      <Hero>
        <Banner title="Error 404" subtitle="Page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
