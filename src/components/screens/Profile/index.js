import React, { useEffect } from "react";

const Profile = (props) => {
  useEffect(() => {
    // console.log("Use Effect Functional Component");
  }, []);
  const { name } = props;
  // console.log("Render Functional Component");
  return <div>{name} Profile</div>;
};

export default Profile;
