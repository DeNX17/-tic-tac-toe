import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {itemSelection, checkWinner, itemSelectionComp} from '../../store/actions/';


class FieldsItem extends React.Component {
	componentDidMount = () => {
		// console.log(this.props)
	}

	pick = () => {
		this.props.itemSelection(this.props.id);
		this.props.checkWinner();

		if(this.props.gameMod === 'comp') {
			this.props.itemSelectionComp();
			
			this.props.checkWinner();
		}
	}


	render () {
		return (
			<div className="field">
				<div className={this.props.value} onClick={this.pick}>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({turn, gameMod}) => {
	return {turn, gameMod}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		itemSelection,
		itemSelectionComp,
		checkWinner
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldsItem);