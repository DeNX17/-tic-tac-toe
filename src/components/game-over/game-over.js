import React from 'react';
import './style.css';

const GameOver = ({result, restart}) => {
	if (result === 'draw') {
		return (
			<div className="container menu">
				<p className="result">!-- DRAW --!</p>
				<button onClick={restart}>Restart</button>
			</div>
		);
	}

	return (
		<div className="container GameOver">
			<p className="result">{result} winner</p>
			<button onClick={restart}>Restart</button>
		</div>
	);
}

export default GameOver;