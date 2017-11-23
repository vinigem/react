import React, { Component } from 'react';

class ItemDetails extends Component {

  render() {
    return (
      <div>
        <h3>Item {this.props.match.params.id}</h3>
      </div>
    );
  }
}

export default ItemDetails;
