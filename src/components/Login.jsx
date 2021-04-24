import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      <div className="login-container">
        <form id="user-login" onSubmit={this.handleSubmit}>
          <h1>Login</h1>

          <div className="text-field-container">
            <TextField
              onChange={this.handleChange}
              name="username"
              label="username"
              variant="filled"
              required
            />
          </div>

          <div className="text-field-container">
            <TextField
              onChange={this.handleChange}
              label="password"
              type="password"
              name="password"
              variant="filled"
              required
            />
          </div>
          <Button type="submit" className="butto -primary">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
