import React, { Component } from 'react';
import Title from './Title';

export default class RoomsFilter extends Component {
  state = {
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfastIncluded: false,
    petsAllowed: false,
  };

  componentDidMount() {
    const prices = this.props.rooms.map((room) => room.price);
    const sizes = this.props.rooms.map((room) => room.size);

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const minSize = Math.min(...sizes);
    const maxSize = Math.max(...sizes);

    this.setState({
      price: maxPrice,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
    });
  }

  handleChange = (e) => {
    let { type, name, value } = e.target;
    value = type === 'checkbox' ? e.target.checked : value;
    this.setState({ [name]: value }, this.filterRooms);
  };

  filterRooms = () => {
    let {
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfastIncluded,
      petsAllowed,
    } = this.state;
    let filteredRooms = [...this.props.rooms];

    if (type !== 'all') {
      filteredRooms = filteredRooms.filter((room) => room.type === type);
    }
    if (capacity > 1) {
      filteredRooms = filteredRooms.filter((room) => room.capacity >= capacity);
    }

    filteredRooms = filteredRooms.filter((room) => room.price <= price);

    filteredRooms = filteredRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfastIncluded) {
      filteredRooms = filteredRooms.filter((room) => room.breakfast);
    }
    if (petsAllowed) {
      filteredRooms = filteredRooms.filter((room) => room.pets);
    }

    this.props.setSortedRooms(filteredRooms);
  };

  getAllUniqueValues = (array, property) => {
    let uniqueValues = [];
    array.forEach((item) => {
      let value = item[property];
      if (!uniqueValues.includes(value)) uniqueValues.push(value);
    });
    return uniqueValues;
  };

  render() {
    const {
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfastIncluded,
      petsAllowed,
    } = this.state;
    let types = ['all', ...this.getAllUniqueValues(this.props.rooms, 'type')];
    let capacities = this.getAllUniqueValues(this.props.rooms, 'capacity');
    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={this.handleChange}
            >
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">capacity</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={this.handleChange}
            >
              {capacities.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">less than ${price}</label>
            <input
              id="price"
              name="price"
              type="range"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="minSize">room size</label>
            <div className="size-inputs">
              <input
                id="minSize"
                name="minSize"
                type="number"
                value={minSize}
                onChange={this.handleChange}
                className="size-input"
              />

              <input
                id="maxSize"
                name="maxSize"
                type="number"
                value={maxSize}
                onChange={this.handleChange}
                className="size-input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfastIncluded"
                id="breakfastIncluded"
                checked={breakfastIncluded}
                onChange={this.handleChange}
              />
              <label htmlFor="breakfastIncluded">breakfast included</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="petsAllowed"
                id="petsAllowed"
                checked={petsAllowed}
                onChange={this.handleChange}
              />
              <label htmlFor="petsAllowed">pets allowed</label>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
