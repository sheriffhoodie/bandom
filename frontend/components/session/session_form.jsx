import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(input) {
    return event => this.setState({
      [input]: event.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const myerrors = this.props.errors.errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
    });
    return (
      <div className="login-form-container">
        <header class="login-header">
          <div id="company_logo">
            <img src="images/bandom-logo.png" alt="" className="logo"></img>
            </div>
          <h2><Link to="/login">Bandom</Link></h2>
        </header>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <ul>{myerrors}</ul>
          <div className="login-form">
            <br/>
            <label className="button-label">Username / email
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"/>
            </label>
            <br/>
            <label className="button-label">Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"/>
            </label>
            <br/>
            <input type="submit" value="Log In" className="login-button"/>
          </div>
          <div className="signup-option">
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
        </form>
        <footer class="footer">Follow me on <a href="http://github.com">GitHub</a>!</footer>
      </div>
    );
  }
}

export default withRouter(SessionForm);
