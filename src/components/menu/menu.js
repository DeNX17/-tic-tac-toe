import React from 'react';

const menu = ({chooseGamemode}) => {
	return (
		<button onClick={() => chooseGamemode(undefined)}>Back to menu</button>
	);
}

export default menu;

