import React, { Component } from "react";
import Login from "./components/Login";
import SessionsAdapter from "./adapters/SessionsAdapter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
    };
  }

  getUser = (user) => {
    return SessionsAdapter.getUser(user).then((userData) => {
      this.setState({
        currentUser: userData,
      });
      localStorage.setItem("token", userData.jwt);
    });
  };

  render() {
    return (
      <div className="App">
        <Login getUser={this.getUser} />
      </div>
    );
  }
}

export default App;
