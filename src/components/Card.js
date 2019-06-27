import React from 'react'
import photo from '../hog-imgs/augustus_gloop.jpg'

export default class Card extends React.Component {

	state = {
		greased: this.props.greased,
		clicked: false,
		hidden: false
	}

	toggleHidden = () => {

	}

	handleClick = () => {
		this.setState({
			greased: !this.state.greased
		})
		alert(this.state.greased)
		// this.props.greased = !this.props.greased
	}

	toggleDetails = () => {
		this.setState({
			clicked: !this.state.clicked
		})
	}

	styleName = () => {
		return this.props.name.toLowerCase().split(" ").join("_")
	}

	render() {
		return(
			<div className="card"> 
				<button onClick={this.toggleDetails}>{this.props.name}</button>
				<button></button>
				{this.state.clicked ? <div> <img src={photo} alt=""/><button onClick={this.handleClick}>Grease Hog!</button></div> : null}
			</div>)
	}
}

// '../hog-imgs/' + this.styleName() + '.jpg'