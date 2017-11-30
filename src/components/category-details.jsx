import React, { Component } from 'react';

import Item from './item';
import items from '../store/items.json';


class CategoryDetails extends Component {

  constructor(props) {
    super(props);
    this.items = items;
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Category {this.props.match.params.id}</h3>
        <div className="flex-box">
          { this.items.map(item => {
              return <Item key={item.id} item={item}></Item>  
            })
          } 
        </div> 
      </div>
    );
  }
}

export default CategoryDetails;
