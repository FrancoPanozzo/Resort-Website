import React, { Component } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';

export default class Room extends Component {
  static contextType = RoomContext;
  state = {
    roomName: this.props.match.params.roomName,
  };

  render() {
    const room = this.context.getRoom(this.state.roomName);
    if (!room) {
      return (
        <div className="error">
          <h3>room not found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    } else {
      const {
        name,
        description,
        size,
        capacity,
        price,
        breakfast,
        pets,
        images,
        extras,
      } = room;
      const [mainImg, ...remainingImgs] = images;
      return (
        <>
          <StyledHero heroImg={mainImg}>
            <Banner title={`${name} room`}>
              <Link to="/rooms" className="btn-primary">
                back to rooms
              </Link>
            </Banner>
          </StyledHero>
          <section className="single-room">
            <div className="single-room-images">
              {remainingImgs.map((img, index) => (
                <img key={index} src={img} alt={name} />
              ))}
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>info</h3>
                <h6>price: ${price}</h6>
                <h6>size: {size} sqft</h6>
                <h6>
                  max capacity:{' '}
                  {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </h6>
                <h6>{pets ? `pets allowed` : `no pets allowed`}</h6>
                <h6>{breakfast ? `free breakfast included` : null}</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>extras:</h6>
            <ul className="extras">
              {extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </section>
        </>
      );
    }
  }
}
