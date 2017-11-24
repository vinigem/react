import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Category extends Component {

  constructor(props) {
    super(props);
    this.category = props.category;
  }

  render() {
    return (
      <div className="flex-item">
        <NavLink to={`/category/${this.category.id}`} className="item-title">{this.category.name}</NavLink>
        <p>Total Items: {this.category.total_items}</p>
      </div>
    );
  }
}

export default Category;
