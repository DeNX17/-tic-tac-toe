import React from 'react';

const menu = ({chooseGamemode}) => {
	return (
		<button
			className="btnToMenu" 
			onClick={() => chooseGamemode(undefined)}>Back to menu</button>
	);
}

export default menu;

