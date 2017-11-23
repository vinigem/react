import React, { Component } from 'react';

import Header from './layout/header.js'
import Footer from './layout/footer.js'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header></Header>
        <div className="content">
          {/*All childrens will be loaded here*/}
          { this.props.children }
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
