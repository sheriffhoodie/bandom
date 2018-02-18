import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      location: "San Francisco, CA",
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
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
    this.setState({loading: true});
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      setTimeout(()=> location.reload(), 2100);
    });
    this.setState(user);
  }

  handleGuest(event) {
    event.preventDefault();
    const demoUser = {
      username: "demo_user142",
      password: "password",
      location: "San Francisco, CA"
    };

    new Typed(".login-input1", {
      strings: ['demo_user142'],
      typeSpeed: 50
    });

    setTimeout(()=> {
      new Typed(".login-input2", {
        strings: ['password'],
        typeSpeed: 50
      });}, 1000);

    this.setState(demoUser);

    setTimeout(() => this.props.processForm(demoUser), 2100);
    setTimeout(()=> location.reload(), 3100);
    // setTimeout(()=> this.props.login(demoUser), 2100);
  }

  render() {
    const {loading} = this.state;
    let loader;
    if (loading) {
      loader = (<div className="loader"></div>);
    } else {
      loader = null;
    }
    const myerrors = this.props.errors.errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
    });
    if (this.props.formType === "login") {
      return (
          <main>
          <div className="login-form-container">
            {loader}
            <header className="login-header">
              <div id="session-company_logo">
                </div>
              <h2 className="company-title"><Link to="/login">Bandom</Link></h2>
            </header>
            <h2 className="session-login-title">Log in</h2>
            <div className="top-divider">
            </div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br/>
              <div className="login-form">
                <br/>
                <label className="button-label">Username / email
                  <input
                    className="login-input1"
                    type="text"
                    onChange={this.update('username')}
                    />
                </label>
                <br/>
                <label className="button-label">Password
                  <input
                    className="login-input2"
                    type="password"
                    onChange={this.update('password')}/>
                </label>
                <ul className="errors">{myerrors}</ul>
                <br/>
                <input type="submit" value="Log in" className="login-button"/>
              </div>
              <div className="link-word">
                Forgot your password?
              </div>
              <div className="option-text">
                <button className="guest-button"
                  onClick={this.handleGuest}>Use Guest Account
                </button>
              </div>
              <div className="option-text">
                Don't have an account? <Link
                to="/signup" className="link-word">Sign Up</Link>
            </div>
            </form>
            <footer className="footer">
              <p className="footer-text">
                Follow me for more!
              </p>
                <a href="http://github.com/sheriffhoodie">
                  <i className="icon fa fa-github-square fa-3x" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">
                  <i className="icon fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                </a>
                <a href="https://angel.co/maxwell-currier">
                  <i className="icon fa fa-angellist fa-3x" aria-hidden="true"></i>
                </a>
            </footer>
          </div>
        </main>
        );
      } else {
          return (
            <main>
            <div className="login-form-container">
              <header className="login-header">
                <div id="session-company_logo">
                  </div>
                <h2
                  className="company-title"><Link to="/login">Bandom</Link></h2>
              </header>
              <h2 className="session-login-title">Sign Up</h2>
              <div className="top-divider">
              </div>
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <br/>
                <div className="login-form">
                  <br/>
                  <label className="button-label">Username / email
                    <input type="text"
                      onChange={this.update('username')}
                      className="login-input1"/>
                  </label>
                  <br/>
                  <label className="button-label">Password
                    <input type="password"
                      onChange={this.update('password')}
                      className="login-input2"/>
                  </label>
                  <ul className="errors">{myerrors}</ul>
                  <br/>
                  <input type="submit" value="Sign Up" className="login-button"/>
                </div>
              </form>
              <div className="option-text2">
              Already have an account? <Link to="/login" className="link-word">Log in</Link>
              </div>
              <footer className="footer">
                <p className="footer-text">
                  Follow me for more!
                </p>
                  <a href="http://github.com/sheriffhoodie">
                    <i className="icon fa fa-github-square fa-3x" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">
                    <i className="icon fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                  </a>
                  <a href="https://angel.co/maxwell-currier">
                    <i className="icon fa fa-angellist fa-3x" aria-hidden="true"></i>
                  </a>
              </footer>
            </div>
          </main>
          );
    }
  }
}

export default withRouter(SessionForm);
