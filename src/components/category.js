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
        <NavLink to={`/category/${this.category.id}`}>{this.category.name}</NavLink>
      </div>
    );
  }
}

export default Category;
