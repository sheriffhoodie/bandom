import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';
import Footer from '../footer';

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
      username: "Demo User",
      password: "password",
      location: "San Francisco, CA"
    };

    new Typed(".login-input1", {
      strings: ['Demo User'],
      typeSpeed: 50
    });

    setTimeout(()=> {
      new Typed(".login-input2", {
        strings: ['password'],
        typeSpeed: 50
      });}, 1000);

    this.setState(demoUser);

    setTimeout(() => this.props.processForm(demoUser), 2100);
    setTimeout(()=> location.reload(), 3000);
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
          <div>
            {loader}
            <header className="login-header">
              <div className="index-company-logo">
              </div>
              <h2 className="company-title">
                <Link to="/login">Bandom</Link>
              </h2>
            </header>
            <h2 className="session-login-title">Log In</h2>
            <div className="top-divider">
            </div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-form">
              <div className="input-div">
                <p className="button-label">Username</p>
                <input type="text"
                  required
                  onChange={this.update('username')}
                  className="login-input"/>
              </div>
              <div className='input-div'>
                <p className="button-label2">Password</p>
                <input type="password"
                  required
                  onChange={this.update('password')}
                  className="login-input"/>
              </div>
              <ul className="errors">{myerrors}</ul>
              <input type="submit" value="Log in" className="login-button"/>
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
          </div>
          <footer className="session-footer">
            <p className="footer-text">
              Follow me for more!
            </p>
            <a href="http://github.com/sheriffhoodie" target="_blank">
              <i className="icon fa fa-github-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/" target="_blank">
              <i className="icon fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://angel.co/maxwell-currier" target="_blank">
              <i className="icon fa fa-angellist fa-3x" aria-hidden="true"></i>
            </a>
          </footer>
        </main>
        );
      } else {
          return (
            <main>
              <div>
                <header className="login-header">
                  <div className="index-company-logo">
                    </div>
                  <h2
                    className="company-title"><Link to="/login">Bandom</Link></h2>
                </header>
                <h2 className="session-login-title">Sign Up</h2>
                <div className="top-divider">
                </div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                  <div className="login-form">
                    <div className="input-div">
                      <p className="button-label">Username</p>
                      <input type="text"
                        required
                        onChange={this.update('username')}
                        className="login-input"/>
                    </div>
                    <div className='input-div'>
                      <p className="button-label2">Password</p>
                      <input type="password"
                        required
                        onChange={this.update('password')}
                        className="login-input"/>
                    </div>
                    <ul className="errors">{myerrors}</ul>
                    <input type="submit" value="Sign Up" className="login-button"/>
                  </div>
                </form>
                <div className="option-text2">
                Already have an account? <Link to="/login" className="link-word">Log in</Link>
                </div>
                <footer className="session-footer">
                  <p className="footer-text">
                    Follow me for more!
                  </p>
                  <a href="http://github.com/sheriffhoodie" target="_blank">
                    <i className="icon fa fa-github-square fa-3x" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/" target="_blank">
                    <i className="icon fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                  </a>
                  <a href="https://angel.co/maxwell-currier" target="_blank">
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
