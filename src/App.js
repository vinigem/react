import React, { Component } from 'react';

import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'


class App extends Component {
  render() {
    return (
     <div className="main">
       <Header></Header>
       <Content></Content>
       <Footer></Footer>
     </div>
    );
  }
}

export default App;
