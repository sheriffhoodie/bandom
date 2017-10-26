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
      <body>
      <div className="login-form-container">
        <header className="login-header">
          <div id="company_logo">
            </div>
          <h2><Link to="/login">Bandom</Link></h2>
        </header>
        <h2 className="login-title">Log in</h2>
        <div className="top-divider">
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
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
            <ul className="errors">{myerrors}</ul>
            <br/>
            <input type="submit" value="Log In" className="login-button"/>
          </div>
          <div className="link-word">
            Forgot your password?
          </div>
          <div className="option-text">
            Don't have an account? <Link to="/signup" className="link-word">Sign Up</Link>
        </div>
        </form>
        <footer className="footer">
          <p className="footer-text">
            Follow me on <a href="http://github.com/sheriffhoodie">GitHub</a>!
          </p>
        </footer>
      </div>
    </body>
    );
  }
}

export default withRouter(SessionForm);
