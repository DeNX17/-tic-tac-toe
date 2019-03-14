import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

import AppComponent from '../components/app/app.js';
import Menu from '../components/menu/menu.js';
import Fields from '../components/fields/fields.js';
import FieldsItem from '../components/fields-item/fields-item.js';
import { App as UnwrappedFoo} from '../components/app/app.js';

test('Test first', () => {
	let arrFields = [];

			for (let i = 0; i < 9; i++) {
				arrFields.push({
					id: i,
					value: null
				});
			}

	const comp = shallow(<Fields fields={arrFields} />);
});


/*
const wrapper = shallow(<AppComponent />);
	expect(wrapper.find('h2').text()).toEqual('L');
	wrapper.find('button').simulate('click');
	*/