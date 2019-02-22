import React from 'react';

class ChooseGamemode extends React.Component {
	state = {
		selectedMode: 'player'
	}

	selectMode = (e) => {
		this.setState({
			selectedMode: e.target.value
		});
	}

	render() {
		return (
		<div className="container">
			<h2>Select game mode</h2>
			<select onChange={this.selectMode} value={this.state.selectMode}>
				<option value="player">2 players</option>
			  <option value="comp">With comp</option>
			</select>
			<br/>
			<button onClick={() => this.props.chooseGamemode(this.state.selectedMode)}>Start</button>
		</div>
		);
	}
}

export default ChooseGamemode;