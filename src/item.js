import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Item extends Component {

  constructor(props) {
    super(props);
    this.item = props.item;
  }

  render() {
    return (
      <div className="flex-item">
        <NavLink to={`/item/${this.item.id}`}>{this.item.name}</NavLink>
      </div>
    );
  }
}

export default Item;
