import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        >>Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        >>Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light">
        >>Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;
