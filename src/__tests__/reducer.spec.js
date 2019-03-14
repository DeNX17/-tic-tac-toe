import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import reducer, {initialState} from '../store/reducers/index.js';
import * as at from '../store/actions/index.js';

configure({adapter: new Adapter()});

test('createElems', () => {
	const action = {
		type: 'CREATE_FIELDS'
	}

	let arrFields = [];

	for (let i = 0; i < 9; i++) {
		arrFields.push({
			id: i,
			value: null
		});
	}

	expect(reducer(initialState, action)).toEqual({
		...initialState,
		fields: arrFields,
		gameStatus: false
	});
}) 

test('ItemSelect', () => {
	let state = reducer(initialState, {type: 'CREATE_FIELDS'});
	let turn = state.turn;

	let action = {
		type: 'ITEM_SELECTION',
		payload: 2
	};
	
	expect(reducer(state, action).fields[2].value).toEqual(turn);

	action.payload = 5;
	turn = turn === "cross" ? "zero" : "cross";
	state.turn = turn;
	
	expect(reducer(state, action).fields[5].value).toEqual(turn)
})