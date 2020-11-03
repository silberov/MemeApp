import React, { Component } from 'react';

import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';
import Container from './components/Container/Container'


class App extends Component {
  constructor() {
    super();
    this.state = { 
      memes: null ,
      search: "A"
    };
  }

  componentDidMount () {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data.data.memes)
        this.setState({ memes: data.data.memes})
      });
  }

  getSearch = (search) => {
    this.setState({ search: search})
    console.log("search", this.state.search)
  }

  render() {
    return (
      <div className="App">
        
        <SearchBar onSearch={(search) => this.getSearch(search)}/>
        {/* <Card name="Distracted Boyfriend" url={"https://i.imgflip.com/1ur9b0.jpg"} /> */}
        <Container memes={this.state.memes} search={this.state.search}/>
        
      </div>
    );
  }
}

export default App;


