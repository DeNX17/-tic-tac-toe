import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createFields} from '../../store/actions/';

import Fields from '../fields/fields.js';
import GameOver from '../game-over/game-over.js';

class App extends React.Component {

  componentDidMount = () => {
    this.props.createFields();
  }

  render() {
    if (this.props.gameStatus) {
      return <GameOver result={this.props.gameStatus} restart={this.props.createFields} />;
    }

    return (
      <div className="container">
        <p>{this.props.gameStatus}</p>
        <Fields fields={this.props.fields} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createFields
  }, dispatch)
}

const mapStateToProps = ({fields, gameStatus}) => {
  return {
    fields,
    gameStatus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




