import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Loading from './Loading';
import RoomCard from './RoomCard';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms, loading } = this.context;
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? (
            <Loading />
          ) : (
            featuredRooms.map((room) => (
              <RoomCard roomData={room} key={room.id} />
            ))
          )}
        </div>
      </section>
    );
  }
}
