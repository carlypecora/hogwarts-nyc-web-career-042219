import React, {Component} from 'react';
import Card from './Card'

export default class Container extends Component {


	exportData = (hogs) => {
		console.log(hogs)
		let hogCard = hogs.map(hog => {
			return <Card {...hog} />
		})
		return hogCard
	} 

	sortPigs = () => {
		 return this.props.hogData.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
	}

	render() {
		console.log(this.props.hogData)
		return(
			<div>
			{this.exportData(this.sortPigs())}
			</div>
			)
	}
}