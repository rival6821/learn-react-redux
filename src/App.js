import React, { Component } from 'react';

import './App.css';
import Counter from './components/Counter';
import WaitingList from './components/WaitingList';

import PalletteContainer from './containers/PaletteContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PalletteContainer/>
        <Counter value={0} color="red" />
        <WaitingList />
      </div>
    );
  }
}

export default App;
