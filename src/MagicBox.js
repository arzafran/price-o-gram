import React from 'react';
import './MagicBox.css';

export default class MagicBox extends React.Component {
  constructor() {
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
      let result = price / grams;
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
        <button className="btn" onClick={this.save}>
          SAVE
        </button>
        <label className="magicbox__label magicbox__label--previous">
          $ {this.state.previousPrice} /Gr.
        </label>
      </section>
    )
  }
}