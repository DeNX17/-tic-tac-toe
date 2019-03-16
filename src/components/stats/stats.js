import React from 'react';

export default class stats extends React.Component {
	state = {
		showStats: false
	}

	getStats = () => {
		this.setState({
			showStats: true
		});
	}

	closeModalWindow = () => {
		this.setState({
			showStats: false
		});
	}

	render(){
		if(this.state.showStats) {
			return (
				<div>
					<div className="overlay" onClick={this.closeModalWindow}></div>
					<div className="statsDetails">
					<div className="overlay-close" onClick={this.closeModalWindow}>X</div>
						<p>Cross wins - {this.props.historyGames.cross}</p>
						<p>Zero wins - {this.props.historyGames.zero}</p>
						<p>Draw - {this.props.historyGames.draw}</p>
					</div>
				</div>
			)
		}

		return (
			<div className="stats">
				<p onClick={this.getStats}>Stats</p>
			</div>
		);
	}
}