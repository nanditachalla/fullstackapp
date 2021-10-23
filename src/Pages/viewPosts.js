import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewPosts() {
  const [noOfUsers, setnoOfUsers] = useState([{ photo: { data: [] } }]);
  //const img =
  //console.log(img);
  useEffect(() => {
    axios.get("http://localhost:3001/CreatePost").then((response) => {
      setnoOfUsers(response.data);

      console.log(response);
    });
  }, []);
  //const base64String =
  return (
    <div>
      {noOfUsers.map((value, key) => {
        return (
          <div>
            {/* <text>Donor Name: {value.items}</text>
            <text>About Donor: {value.timespan}</text> */}
            <img
              src={new Buffer.from(value.photo.data).toString("ascii")}
              alt="loading.."
            />
            {/* <text>Contact Details: {value.contact}</text> */}
          </div>
        );
      })}
    </div>
  );
}

export default ViewPosts;
