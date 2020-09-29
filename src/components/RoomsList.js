import React, { Component } from 'react';
import RoomCard from './RoomCard';

export default class RoomsList extends Component {
  render() {
    if (!this.props.rooms.length)
      return (
        <div className="empty-search">
          <h3>No rooms match your search parameters</h3>
        </div>
      );
    else
      return (
        <section className="roomslist">
          <div className="roomslist-center">
            {this.props.rooms.map((room) => (
              <RoomCard key={room.id} roomData={room}></RoomCard>
            ))}
          </div>
        </section>
      );
  }
}
