import { connect } from "react-redux";
import React, { Component } from "react";
import Navbar from "../components/common/AppBars/navBar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Home);
