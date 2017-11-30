import React, { Component } from 'react';

import Category from './category';
import categories from '../store/categories.json';

class Home extends Component {

  constructor() {
    super();
    this.categories = categories;
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
