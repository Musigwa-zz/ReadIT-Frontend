import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../../assets/img/avatar.jpg";

class Navbar extends Component {
  state = {
    toggle: "none",
  };

  toggleOptions() {
    this.setState(state => ({
      toggle: state.toggle === "none" ? "block" : "none",
    }));
  }

  render() {
    const { toggle } = this.state;
    const token = localStorage.getItem("token");

    if (!token) {
      return <React.Fragment />;
    }
    return (
      <div>
        <section
          style={{ margin: 0, boxSizing: "border-box", padding: 0 }}
          className="nav-bar"
        >
          <div className="nav-container">
            <Link className="col-md-6 col-sm-3 brand-name" to="/">
              <div className="brand">
                <img src={Logo} alt="logo" className="brand" />
              </div>
              <h3>AH</h3>
            </Link>
            <div className="col-md-6 col-sm-9 user-actions">
              <div className="search-filed">
                <input type="search" name="search" placeholder="Search....." />
              </div>
              <div className="other-actions">
                <div className="menu-container hide-md" />
                <button
                  type="button"
                  className="current-user hide-sm"
                  onClick={() => this.toggleOptions()}
                  id="user-dropdown"
                >
                  <img src={Logo} alt="user" className="user-avatar" />
                  <div className="user-name">
                    <p>John Doe</p>
                  </div>
                </button>
                <div className="drop-down" style={{ display: toggle }}>
                  <div className="up-arrow" />
                  <div className="drop-down-content">
                    <ul className="links">
                      <li className="nav-link">
                        <Link to="/articles/new" className="main">
                          New Story
                        </Link>
                      </li>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <a href="./authors-performance.html">Stats</a>
                      </li>
                      <li>
                        <Link to="/settings">Settings</Link>
                      </li>
                      <li>
                        <Link to="/sign_in">Sign out</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(withRouter(Navbar));