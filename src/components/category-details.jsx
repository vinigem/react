import React, { Component } from 'react';

import Item from './item';


class CategoryDetails extends Component {

  constructor(props) {
    super(props);
    this.items = [
      {"id": "1", "name": "Item 1", "price": "2999", "discount":"30%", "offer_price": "2099"},
      {"id": "2", "name": "Item 2", "price": "1999", "discount":"30%", "offer_price": "1399"},
      {"id": "3", "name": "Item 3", "price": "999", "discount":"30%", "offer_price": "699"},
      {"id": "4", "name": "Item 4", "price": "1499", "discount":"30%", "offer_price": "1049"},
      {"id": "5", "name": "Item 5", "price": "2499", "discount":"30%", "offer_price": "1749"},
      {"id": "6", "name": "Item 6", "price": "3499", "discount":"30%", "offer_price": "2449"}
    ];
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
