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
        <NavLink to={`/item/${this.item.id}`} className="item-title">{this.item.name}</NavLink>
        <p className="strike-price">Price: <strike>&#8377;{this.item.price}</strike></p>
        <p className="discount">Discount: {this.item.discount}</p>
        <p className="offer-price">Offer Price: &#8377;{this.item.offer_price}</p>
      </div>
    );
  }
}

export default Item;
