import React from 'react';

const gameOver = ({result, restart}) => {
	if (result === 'Draw') {
		return <p>!-- DRAW --!</p>
	}

	return (
		<div className="container">
			<p>{result}'s winner</p>
			<button onClick={restart}>Restart</button>
		</div>
	);
}

export default gameOver;