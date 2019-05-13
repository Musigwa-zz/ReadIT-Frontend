import { connect } from "react-redux";
import React, { Component } from "react";

class Home extends Component {
  render() {
    return <div className="scroll-container" />;
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Home);
