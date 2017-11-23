import React, { Component } from 'react';

import Category from '../components/category';

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
