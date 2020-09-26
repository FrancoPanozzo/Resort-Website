import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/no-img.png';
export default class RoomCard extends Component {
  render() {
    const { name, slug, images, price } = this.props.roomData;
    return (
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt={name}></img>
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            features
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    );
  }
}
