import React, { Component } from "react";

import CardList from './components/card-list/card-list.component';

import "./App.css";

class App extends Component
{
  constructor()
  {
    super();

    this.state = {
      monsters: [
      ],
      searchField: '',
    };
  }

  componentDidMount ()
  {
    // called when react is done rendering this page
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render ()
  {
    return (
      <div className="App">
        <input type='search' placeholder='search your monsters' onChange={ evt => this.setState({ searchField: evt.target.value }, () => console.log(this.state)) } />
        <CardList monsters={ this.state.monsters }>
        </CardList>
      </div>
    );
  }
}

export default App;
