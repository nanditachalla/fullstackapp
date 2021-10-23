import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
function IndPost() {
  let { email } = useParams();
  const [postObj, setPostObj] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/User/byId/${email}`).then((response) => {
      setPostObj(response.data);
      console.log(response);
    });
  });
  return (
    <div className="IndPost">
      <div>Email :{postObj.email}</div>
      <div>Name:{postObj.name}</div>
      <Link to="/Home">To Home</Link>
    </div>
  );
}

export default IndPost;
