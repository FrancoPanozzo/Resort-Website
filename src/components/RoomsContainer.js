import React, { Component } from 'react';
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';
import { RoomContext } from '../Context';
import Loading from './Loading';

export default class RoomsContainer extends Component {
  static contextType = RoomContext;
  render() {
    return (
      <section>
        {this.context.loading ? (
          <Loading />
        ) : (
          <>
            <RoomsFilter
              setSortedRooms={this.context.setSortedRooms}
              rooms={this.context.rooms}
            />
            <RoomsList rooms={this.context.sortedRooms} />
          </>
        )}
      </section>
    );
  }
}
