import React from "react";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="Profile">
      <div className="Back" style={{ paddingLeft: "10px", paddingTop: "10px" }}>
        <Link
          to="/Home"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "large",
          }}
        >
          Back
        </Link>
      </div>
      <div className="ProfHead">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "large",
            paddingRight: "15px",
          }}
        >
          Delete Account
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "large",
            paddingRight: "15px",
          }}
        >
          Log Out
        </Link>

        <Link
          to="/CreatePost"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "large",
            paddingRight: "15px",
          }}
        >
          Create a post
        </Link>
      </div>
    </div>
  );
}

export default Profile;
