import React, { Component } from 'react';

import Item from './item';


class CategoryDetails extends Component {

  constructor(props) {
    super(props);
    this.items = [
      {"id": "1", "name": "Item 1"},
      {"id": "2", "name": "Item 2"},
      {"id": "3", "name": "Item 3"},
      {"id": "4", "name": "Item 4"},
      {"id": "5", "name": "Item 5"},
      {"id": "6", "name": "Item 6"}
    ];
  }

  render() {
    return (
      <div>
        <h3>Category {this.props.match.params.id}</h3>
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
