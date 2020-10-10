import React, { Component } from 'react';
import { connect } from "react-redux";

class Spinner extends Component {

  render() {
    let classes = 'spinner';
    if (!this.props.spinner) {
      classes += ' display-none';
    }
    return (
      <div className={classes}>
      </div>
    )
  }
}

function mapStateToProps(state) {
 return { 
   spinner: state.spinner
  };
}

export default connect(mapStateToProps)(Spinner);