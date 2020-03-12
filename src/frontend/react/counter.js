import React from 'react'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = { count: 0 }
	}

	climb() {
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		return(
			<div className="counter-parrent" onClick={this.climb.bind(this)}>
				<div className="testClass"></div>
				<h1>Count: {this.state.count}</h1>
			</div>
		)
	}
}