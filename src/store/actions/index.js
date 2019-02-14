const pickItem = (id) => {
	return {
		type: 'PICK_ITEM',
		payload: id
	};
};

const miningField = () => {
	return {
		type: 'MINING_FIELD'
	}
}

const refreshGame = () => {
	return {
		type: 'REFRESH_GAME'
	}
}

export {
	pickItem,
	miningField,
	refreshGame
};