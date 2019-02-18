const createFields = () => {
	return {
		type: 'CREATE_FIELDS'
	};
};

const itemSelection = (id) => {
	return {
		type: 'ITEM_SELECTION',
		payload: id
	}
}

const checkWinner = () => {
	return {
		type: 'CHECK_WINNER'
	}
}

const changeTurn = () => {
	return {
		type: 'CHANGE_TURN'
	}
}

export {
	createFields,
	itemSelection,
	checkWinner,
	changeTurn
};