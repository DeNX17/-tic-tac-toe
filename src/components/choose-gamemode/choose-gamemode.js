import React from 'react';
import './style.css';

class ChooseGamemode extends React.Component {
	state = {
		selectedMode: 'player'
	}

	selectMode = (e) => {
		this.setState({
			selectedMode: e.target.value
		});
	}

	chooseGamemode = () => {
		this.props.chooseGamemode(this.state.selectedMode);
		this.props.createFields();
	}

	render() {
		return (
		<div className="container chooseGamemode">
			<h2>Select game mode</h2>
			<select onChange={this.selectMode} value={this.state.selectMode}>
				<option value="player">2 players</option>
			  <option value="comp">With comp</option>
			</select>
			<br/>
			<button className="btnStart" onClick={this.chooseGamemode}>Start</button>
		</div>
		);
	}
}

export default ChooseGamemode;