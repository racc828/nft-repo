import React from "react";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let user = this.state;
    this.props.getUser(user);
  };

  render() {
    return (
      <div>
        <form id="user-login" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Username"
            required
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
