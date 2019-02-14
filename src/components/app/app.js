import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pickItem, refreshGame, miningField} from '../../store/actions/index.js';
import EndGame from '../endGame/endGame.js';

class App extends React.Component {
  componentDidMount = () => {
    this.props.miningField();
  }

  render() {
    const fields = this.props.fields.map((item, index) => {
      const styleClass = item.status ? item.bomb ? 'active-true field' : 'active field' : 'field';
      return <div className={styleClass}
                  key={index} 
                  onClick={() => this.props.pickItem(index)}>
              </div>
    });

    return (
      // отрисовка полей
      <div className="container">
      {this.props.resultGame ? <EndGame /> : ''}
      <button onClick={this.props.refreshGame}>refresh</button>
      <hr/>
        <div className="fields">
          {fields}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({fields, resultGame}) => {
  return {fields, resultGame};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    pickItem,
    miningField,
    refreshGame
  }, dispatch)
  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




