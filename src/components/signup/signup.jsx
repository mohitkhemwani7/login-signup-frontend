import React from 'react';
import './signup.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            username: '',
            password: '',
            cnfpassword:'',
            sumbitted: false
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        console.log(this.state);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {name, email, username, password, cnfpassword, submitted} = this.state;

        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <div id="signupform">
                    <h2 id="headerTitle">SignUp Page</h2>
                    <div className="row">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="name"
                               onChange={this.onChange}/>
                        {submitted && !name &&
                        <div className="help-block">Name is required</div>
                        }
                    </div>
                    <div className="row">
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" placeholder="email"
                               onChange={this.onChange}/>
                        {submitted && !email &&
                        <div className="help-block">Email is required</div>
                        }
                    </div>
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
                    <div className="row">
                        <label>Confirm Password</label>
                        <input type="password" name="cnfpassword" className="form-control" placeholder="password"
                               onChange={this.onChange}/>
                        {submitted && !(password===cnfpassword) &&
                        <div className="help-block">Password Not Matching</div>
                        }
                    </div>
                    <div id="button" className="row">
                        <button type="submit" onClick={this.handleSubmit}>Create Account</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SignUp;
