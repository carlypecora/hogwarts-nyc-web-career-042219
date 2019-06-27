import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container'
// import hog-imgs from './src/hog-imgs'

class App extends Component {
	//http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g

	state = {
		filtered: true
	}

	filterGreased = (hogs) => {
		return hogs.filter(hog => hog.greased === true)
	}

	toggleGreased = () => {
		this.setState({
			filtered: !this.state.filtered 
		})
	}	

	sendTheHogs = (hogs) => {
		return this.state.filtered ? hogs : this.filterGreased(hogs)
	}

  render() {
    return (
      <div className="App" >
          <Nav />
          <Container hogData={this.sendTheHogs(hogs)}/>
          <button onClick={this.toggleGreased}> Filter the pigs </button>

      </div>
    )
  }
}

export default App;
