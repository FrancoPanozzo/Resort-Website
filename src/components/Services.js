import React, { Component } from 'react';
import Title from './Title.js';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Service from './Service';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'the best cocktails',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, nulla.',
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, nulla.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'shuttle van',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, nulla.',
      },
      {
        icon: <FaBeer />,
        title: 'open tap!',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, nulla.',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              info={service.info}
            />
          ))}
        </div>
      </section>
    );
  }
}
