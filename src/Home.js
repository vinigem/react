import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Home extends Component {

  constructor() {
    super();
    this.categories = [
      {"id": "1", "name": "Category 1"},
      {"id": "2", "name": "Category 2"},
      {"id": "3", "name": "Category 3"},
      {"id": "4", "name": "Category 4"},
      {"id": "5", "name": "Category 5"},
      {"id": "6", "name": "Category 6"}
    ];
  }

  render() {
    return (
      <div className="categories-box">
        { this.categories.map(category => {
            return <div className="category-item" key={category.id}>
              <NavLink to={`category/${category.id}`}>{category.name}</NavLink>
            </div>
          })
        }
      </div>
    );
  }
}

export default Home;
