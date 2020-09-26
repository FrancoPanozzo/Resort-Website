import React, { Component } from 'react';

export default class Service extends Component {
  render() {
    return (
      <article className="service">
        <span>{this.props.icon}</span>
        <h6>{this.props.title}</h6>
        <p>{this.props.info}</p>
      </article>
    );
  }
}
