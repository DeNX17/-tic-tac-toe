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

const itemSelectionComp = () => {
	return {
		type: 'ITEM_SELECTION_COMP'
	}
}

const checkWinner = () => {
	return {
		type: 'CHECK_WINNER'
	}
}

const chooseGamemode = (mode) => {
	return {
		type: 'CHOOSE_GAMEMODE',
		payload: mode
	}
}

const getHistory = () => {
	return {
		type: 'GET_HISTORY'
	}
}
export {
	createFields,
	itemSelection,
	itemSelectionComp,
	checkWinner,
	chooseGamemode,
	getHistory
};