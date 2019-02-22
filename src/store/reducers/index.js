const initialState = {
	fields: [], // id, status, value
	turn: 'cross', // zero and cross
	gameStatus: false,
	gameMod: undefined,
	testStatus: false,
	isTurnDone: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_FIELDS':
			let arrFields = [];

			for (let i = 0; i < 9; i++) {
				arrFields.push({
					id: i,
					value: null
				});
			}
			return {
				...state,
				fields: arrFields,
				gameStatus: false
			}

		case 'ITEM_SELECTION':
			let fieldsClone = state.fields;
			let turn = state.turn;
			let isTurnDone = state.isTurnDone;

			if (fieldsClone[action.payload].value === null) {
				fieldsClone[action.payload].value = turn;
				isTurnDone = true;
				if(state.gameMod === 'player'){
					turn = state.turn === 'cross' ? 'zero' : 'cross';
				}
			}

			return {
				...state,
				fields: fieldsClone,
				turn: turn,
				isTurnDone: isTurnDone
			}
		case 'ITEM_SELECTION_COMP':
			let fieldsCloned = state.fields;
			let arrNull = state.fields.filter(item => item.value === null);
			let isTurnDone1 = state.isTurnDone;

			if(arrNull.length === 0){
				return{
					...state
				};
			}

			let randNumber = Math.floor(Math.random()* arrNull.length);
			let idx = arrNull[randNumber].id;
			
			if (isTurnDone1 === true) {
				fieldsCloned[idx].value = 'zero';
				isTurnDone1 = false;
			}

			return {
				...state,
				fields: fieldsCloned,
				testStatus: !state.testStatus,
				isTurnDone: isTurnDone1
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
		
		case 'CHOOSE_GAMEMODE':
			return {
				...state,
				gameMod: action.payload
			}

		default: 
			return state;
	}
};

export default reducer;