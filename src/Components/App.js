import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { updateUser } from '../Actions'

class App extends React.Component {
  updateUser = () => {
    this.props.dispatch(updateUser('hello'));
  }
  render() {
    return (
      <div>
        <h1>App component {this.props.demo.name}</h1>
        <button onClick={this.updateUser}>Update</button>
      </div>
    )
  }
};

const select = store => store;

/* const mapDispatchToProps = dispatch => ({
  updateUser: () => dispatch(updateUser('minaxi'))
}) */
export default connect(select, /* mapDispatchToProps */)(App);
