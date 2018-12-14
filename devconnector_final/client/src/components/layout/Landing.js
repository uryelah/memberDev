import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 ">'member Dev? </h1>
                  <p className="lead">
                    {" "}
                    Connect with other devs, read and publish articles and
                    (re)member the old good days together with an unnecessarily,
                    but arguably usable, retro UI.
                  </p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <pre>{`
         ___________________
         | _______________ |                                  
         | |-------------| |
         | ||___MEMBER__|| |
         | ||____DEV?___|| |                
         | ||___________|| |
         | |=============| |
         |_________________|
             _[_______]_
         ___[___________]___
        |         [_____] []|__
        | Q O     [_____] []|  \\___
        L___________________J       \\  
         ___________________        /-\\
        /|_|_|_|_|_|_|_|_ |_|\\     (_|_)
                        |<- |   
    `}</pre>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
