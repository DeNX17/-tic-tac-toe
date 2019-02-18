const initialState = {
	fields: [],
	turn: 'cross',
	gameStatus: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_FIELDS':
			let arrFields = [];

			for (let i = 0; i < 9; i++) {
				arrFields.push({
					id: i,
					status: false,
					value: null
				});
			}
			return {
				...state,
				fields: arrFields
			}

		case 'ITEM_SELECTION':

			return {
				...state
			}

		case 'CHECK_WINNER':
			return {
				...state
			}
		
		case 'CHANGE_TURN':
			return {
				...state
			}

		default: 
			return state;
	}
};

export default reducer;