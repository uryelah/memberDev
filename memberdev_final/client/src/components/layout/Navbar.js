import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Spinner from "../common/Spinner";
import {
  getCurrentProfile,
  clearCurrentProfile
} from "../../actions/profileActions";

class Navbar extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    let { profile, loading } = this.props.profile;
    const { isAuthenticated, user } = this.props.auth;
    let dashboardContent;

    const guestLinks = (
      <ul className="navbar-nav ml-auto inverse">
        <li className="nav-item inverse">
          <Link className="nav-link inverse" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item inverse">
          <Link className="nav-link inverse" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    let profilehand;

    if (profile === null || loading) {
      profilehand = "/profile/" + "saracha";
    } else {
      
      if (Object.keys(profile).length > 0) {
        profilehand = "/profile/" + profile.handle;
      } else {
        
        dashboardContent = (
          <div>
            <div class="full-blue-transition" />

            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    const authLinks = (
      <ul className="navbar-nav ml-auto inverse">
        <li className="nav-item inverse">
          <Link className="nav-link inverse" to="/feed">
            Posts
          </Link>
        </li>
        <li className="nav-item inverse">
          <Link className="nav-link inverse" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item inverse">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link inverse"
          >
            {" "}
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm mb-4 inverse">
        <div className="container inverse">
          <Link className="navbar-brand inverse" to="/">
            MemberDev
          </Link>
          <button
            className="navbar-toggler inverse"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon inverse" />
          </button>

          <div className="collapse navbar-collapse inverse" id="mobile-nav">
            <ul className="navbar-nav mr-auto inverse">
              <li className="nav-item inverse">
                <Link className="nav-link inverse" to="/profiles">
                  {" "}
                  Developers
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile, getCurrentProfile }
)(Navbar);
