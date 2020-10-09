import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideSpinner } from '../actions';


class Spinner extends Component {

  componentWillUpdate() {
    clearTimeout(this.componentWillUpdate());
    const id = setTimeout(() => {this.props.hideSpinner();}, 3000);
    return id;
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    hideSpinner: hideSpinner
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Spinner);