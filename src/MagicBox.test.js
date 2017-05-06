import React from 'react';
import ReactDOM from 'react-dom';
import Magicbox from './MagicBox';

it('renders without crashing', () => {
  const container = document.createElement('section');
  ReactDOM.render(<Magicbox />, container);
});