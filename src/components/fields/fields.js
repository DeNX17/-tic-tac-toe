import React from 'react';

import FieldsItem from '../fields-item/fields-item.js';


const fields = ({fields}) => {
	const renderFields = () => {
		return (
			fields.map((item) => {
				return <FieldsItem key={item.id}  {...item} />
		}))
	}

	return (
		<div>
			<div className="fields">
				{renderFields()}
			</div>
		</div>
	);
}

export default fields;