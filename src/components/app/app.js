import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createFields, chooseGamemode, itemSelectionComp} from '../../store/actions/';

import Fields from '../fields/fields.js';
import GameOver from '../game-over/';
import ChooseGamemode from '../choose-gamemode/';
import Menu from '../menu/menu.js';

class App extends React.Component {

  componentDidMount = () => {
    this.props.createFields();
  }

  render() {
    if (this.props.gameStatus) {
      return <GameOver result={this.props.gameStatus} restart={this.props.createFields} />;
    }

    if (!this.props.gameMod) {
      return <ChooseGamemode chooseGamemode={this.props.chooseGamemode} createFields={this.props.createFields}/>
    }

    const turnClassName = this.props.turn === 'cross' ? 'crossText' : 'zeroText';

    return (
      <div className="container">
        <div className="menu">
          <p className={turnClassName}>Ход - {this.props.turn}</p>
          <Menu chooseGamemode={this.props.chooseGamemode} />
        </div>
        <Fields fields={this.props.fields} testStatus={this.props.testStatus}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createFields,
    chooseGamemode,
    itemSelectionComp
  }, dispatch)
}

const mapStateToProps = ({fields, gameStatus, turn, gameMod, testStatus}) => {
  return {
    fields,
    gameStatus,
    turn,
    gameMod,
    testStatus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




