import React, { Component } from 'react';


class Category extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Category {this.props.match.params.id}</div>
    );
  }
}

export default Category;
