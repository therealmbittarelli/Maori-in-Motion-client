import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Required, Label } from "../Form/Form";
import AuthApiService from "../../services/auth-api-service";
import Button from "../Button/Button";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    const { name, username, password } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value
    })
      .then(user => {
        name.value = "";
        username.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form id="sign-up-form" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <section id="sign-up-container">
          <div>
            <Label className="name-label" htmlFor="registration-name-input">
              Enter your name
              <Required />
            </Label>
            <br />
            <Input
              ref={this.firstInput}
              id="registration-name-input"
              className="name-input"
              name="name"
              required
            />
          </div>
          <div>
            <Label htmlFor="registration-username-input">
              Choose a username
              <Required />
            </Label>
            <br />
            <Input id="registration-username-input" name="username" required />
          </div>
          <div>
            <Label htmlFor="registration-password-input">
              Choose a password
              <Required />
            </Label>
            <br />
            <Input
              id="registration-password-input"
              name="password"
              type="password"
              required
            />
          </div>
        </section>
        <footer>
          <Button id="sign-up-button" type="submit">
            Sign up
          </Button>{" "}
          <br />
          <Link className="already-have-an-account-link" to="/login">
            Already have an account?
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
