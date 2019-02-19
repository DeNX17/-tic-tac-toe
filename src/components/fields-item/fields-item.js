import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {itemSelection, checkWinner} from '../../store/actions/';


class FieldsItem extends React.Component {
	state = {
		classEl: ''
	}
	
	componentDidMount = () => {
		//console.log(this.props)
	}
	pick = () => {
		this.setState({
			classEl: this.props.turn
		});
		this.props.itemSelection(this.props.id);
		this.props.checkWinner();
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

const mapStateToProps = ({turn}) => {
	return {turn}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		itemSelection,
		checkWinner
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldsItem);