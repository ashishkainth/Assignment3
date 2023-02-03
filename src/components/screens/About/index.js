import React from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../../../utils/UserContext";
import Profile from "../Profile";
import ProfileClass from "../ProfileClass";
// const About = () => {
//   return (
//     <div>
//       {/* <Outlet /> */}
//       <Profile name="ashish" />
//       <ProfileClass name="Ashish kainth" />
//       <h1>About</h1>
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  async componentDidMount() {
    // const userData = await fetch("https://api.github.com/users/ashishkainth");
    // const json = await userData.json();
    // this.setState({ userInfo: json });
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        {/* <Outlet /> */}
        <UserContext.Consumer>
          {(value) => {
            console.log("value ", value);
          }}
        </UserContext.Consumer>

        <ProfileClass name="Child 1-> ashish" />
        {/* <ProfileClass name="Child 2 -> Ashish kainth" /> */}
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
