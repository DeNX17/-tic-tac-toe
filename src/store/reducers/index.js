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
				fields: arrFields,
				gameStatus: false
			}

		case 'ITEM_SELECTION':
			// get id field
			let fieldsClone = state.fields;
			let turn = state.turn === 'cross' ? 'zero' : 'cross';

			fieldsClone[action.payload]['value'] = state.turn;

			return {
				...state,
				fieldsClone,
				turn: turn
			}

		case 'CHECK_WINNER':
			let fields = state.fields;
			let gameStatus = state.gameStatus;
			let arr = fields.filter(item => item.value === null);
			
			if (arr.length === 0) { gameStatus = 'Draw'; }
			if (fields[0].value != null) {
				if(fields[0].value === fields[1].value && fields[1].value === fields[2].value) { gameStatus = fields[0].value; }
				if(fields[0].value === fields[4].value && fields[4].value === fields[8].value) { gameStatus = fields[0].value; }
				if(fields[0].value === fields[3].value && fields[3].value === fields[6].value) { gameStatus = fields[0].value; }
			}

			if (fields[4].value != null) {
				if(fields[4].value === fields[1].value && fields[1].value === fields[7].value) { gameStatus = fields[4].value; }
				if(fields[4].value === fields[3].value && fields[3].value === fields[5].value) { gameStatus = fields[4].value; }
				if(fields[4].value === fields[2].value && fields[2].value === fields[6].value) { gameStatus = fields[4].value; }
			}

			if (fields[8].value != null) {
				if(fields[8].value === fields[2].value && fields[2].value === fields[5].value) { gameStatus = fields[8].value; }
				if(fields[8].value === fields[6].value && fields[6].value === fields[7].value) { gameStatus = fields[8].value; }
			}

			return {
				...state,
				gameStatus
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