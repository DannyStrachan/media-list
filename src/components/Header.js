import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/userReducer";
import { Link } from "react-router-dom";

function Header(props) {
  console.log(props);
  return (
    <header>
      {props.user.loggedIn ? (
        <div className="header-container">
          <div className="header-title">
            <div>Media List</div>
          </div>
          <div className="links">
            <button onClick={props.logout} className="btn warning-btn">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="header-container">
          <div className="header-title">
            <div>Media List</div>
          </div>
          <span className="links">
            <Link to="/login" className="btn normal-btn">
              Login
            </Link>
            <Link to="/signup" className="btn normal-btn">
              Signup
            </Link>
          </span>
        </div>
      )}
    </header>
  );
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { logout }
)(Header);
