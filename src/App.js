import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      previousPrice: 0,
      pricePerGram: 0 
    };
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
  }

  update(){
    let price = this.refs.price.value;
    let grams = this.refs.grams.value;

    if (price && grams) {
      const result = price / grams;
      this.setState({pricePerGram: result.toFixed(3)})
    } else {
      this.setState({pricePerGram: 0})
    }
  }

  save() {
    if(this.state.pricePerGram)
      this.setState({previousPrice: this.state.pricePerGram});
  }

  render() {
    return (
      <div className="main-container">
        <h1>Price-O-Gram</h1>
        <section className="magicbox">
          <input
            className="input"
            ref="price"
            onChange={this.update}
            type="number"
            placeholder="Price"
          />
          <input
            className="input"
            ref="grams"
            onChange={this.update}
            type="number"
            placeholder="Grams in package"
          />
          <label className="magicbox__label">
            $ {this.state.pricePerGram} /Gr.
          </label>
          <button
            className="btn"
            onClick={this.save}>
            SAVE
          </button>
          <label className="magicbox__label magicbox__label--previous">
            $ {this.state.previousPrice} /Gr.
          </label>
        </section>
      </div>
    );
  }
}
