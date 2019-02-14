const initialState = {
	fields: [
		{
			id: 0,
			status: false,
			bomb: false
		},
		{
			id: 1,
			status: false,
			bomb: false
		},
		{
			id: 2,
			status: false,
			bomb: false
		},
		{
			id: 3,
			status: false,
			bomb: false
		},
	],
	resultGame: false,
	amountFields: 4
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PICK_ITEM':
			let end = false;
			return {
				...state,
				fields: state.fields.map((item) => {
					if(item.id === action.payload) {
						if(item.bomb) {end = true; }
						return {
							...item,
							status: true
						}
					}
					return item;
				}),
				resultGame: end
			};

		case 'MINING_FIELD':
			const randNum = Math.floor(Math.random()*state.fields.length);
			return {
				...state,
				fields: state.fields.map((item) => {
					if(item.id === randNum) {
						return {
							...item,
							bomb: true,
						}
					}
					return item;
				})
			}

		case 'REFRESH_GAME':
			const rand = Math.floor(Math.random()*state.fields.length);
			let fields = [];
			for (let i = 0; i < state.amountFields; i++) {
				if(i === rand) { fields.push({id: i, status: false, bomb: true}); continue }
				fields.push({
					id: i,
					status: false,
					bomb: false
				});
			}
			return {
				...state,
				fields: fields,
				resultGame: false
			}
		default: 
			return state;
	}
};

export default reducer;