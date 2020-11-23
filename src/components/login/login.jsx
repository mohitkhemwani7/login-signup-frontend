import React from 'react';
import history from '../history';
import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            sumbitted: false
        };
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        // const {mobile, password} = this.state;
        // const {dispatch} = this.props;
        // if (mobile && password) {
        //     dispatch(userActions.login(mobile, password));
        // }
    }

    signup() {
        history.push("/signup")
    }

    login(e) {
        // PostUser('login', this.state).then((result) => {
        //     let response = result;
        //     console.log(response);
        // });
        e.preventDefault();
        this.setState({sumbitted: true});
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {username, password, submitted} = this.state;
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <div id="loginform">
                    <h2 id="headerTitle">Login Page</h2>
                    <div className="row">
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" placeholder="username"
                               onChange={this.onChange}/>
                        {submitted && !username &&
                        <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className="row">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="password"
                               onChange={this.onChange}/>
                        {submitted && !password &&
                        <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div id="button" className="row">
                        <button type="submit" onClick={this.handleSubmit}>Login</button>
                    </div>
                    <div id="button" className="row">
                        <button onClick={this.signup}>Signup</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Login;
