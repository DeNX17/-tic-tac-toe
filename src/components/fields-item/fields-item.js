import React from 'react';

class FieldsItem extends React.Component {
	state = {
		classEl: ''
	}

	pick = () => {
		this.setState({
			classEl: 'cross'
		});
	}

	render () {
		return (
			<div className="field">
				<div className={this.state.classEl} onClick={this.pick}>
				</div>
			</div>
		);
	}
}

export default FieldsItem;