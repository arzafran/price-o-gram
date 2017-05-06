import React from 'react';
import Magicbox from './MagicBox';

export default class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>Price-O-Gram</h1>
        <Magicbox />
      </div>
    );
  }
}
