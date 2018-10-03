import React, { Component } from 'react';
import ChallengeCard from './components/cards/ChallengeCard/ChallengeCards';
import ValueCard from './components/cards/ValueCard/ValueCard';
import AsignCard from './components/cards/AsignCard/AsignCard';
import UserTable from './components/userTable/UserTable';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cards">
          <ChallengeCard />
          <ValueCard />
          <AsignCard />
        </div>
        <div className="table">
          <UserTable />
        </div>
      </div>
    );
  }
}

export default App;
