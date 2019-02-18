import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createFields} from '../../store/actions/';

import Fields from '../fields/fields.js';

class App extends React.Component {

  componentDidMount = () => {
    this.props.createFields();
  }

  render() {
    // Render table component
    // Add .zero styles
    // event pick (zero and cross)
    // 

    return (
      <div className="container">
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

const mapStateToProps = ({fields}) => {
  return {
    fields
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




