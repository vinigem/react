import React, { Component } from 'react';

import Category from './category';

class Home extends Component {

  constructor() {
    super();
    this.categories = [
      {"id": "1", "name": "Category 1", "total_items": "100"},
      {"id": "2", "name": "Category 2", "total_items": "200"},
      {"id": "3", "name": "Category 3", "total_items": "150"},
      {"id": "4", "name": "Category 4", "total_items": "200"},
      {"id": "5", "name": "Category 5", "total_items": "100"},
      {"id": "6", "name": "Category 6", "total_items": "50"}
    ];
  }

  render() {
    return (
      <div className="flex-box">
        { this.categories.map(category => {
            return <Category key={category.id} category={category}></Category>  
          })
        }
      </div>
    );
  }
}

export default Home;
