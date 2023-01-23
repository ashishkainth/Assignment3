import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 2,
      userInfo: {
        name: "",
        avatar_url: null,
        id: "",
        type: "",
      },
    };

    console.log("Child Constructor " + this.props.name);
  }

  async componentDidMount() {
    const userData = await fetch("https://api.github.com/users/ashishkainth");
    const json = await userData.json();
    this.setState({ userInfo: json });
    console.log("Child componentDidMount  " + this.props.name);
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Child Render" + this.props.name);
    return (
      <div>
        <h1>Name: {this.state.userInfo.name}</h1>
        <h1>ID: {this.state.userInfo.id}</h1>
        <h1>Type: {this.state.userInfo.type}</h1>
        <img src={this.state.userInfo.avatar_url} alt="avatar" />
        <h1>{this.props.name} Profile Class</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count1}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          like me
        </button>
      </div>
    );
  }
}

export default ProfileClass;
