import React from "react"
import fire from "../config/fire"



class Login extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/projects')
            })
            .catch(error => alert("Register error"))
    }
    render() {
        return (

            <div className="login-container">
                <h3>Create An Account:</h3>
                <p>Email:</p>
                <input value={this.state.email}
                    type="email" name="email" placeholder="your email..."
                    onChange={this.handleChange} />
                <p>Password:</p>
                <input value={this.state.password}
                    type="password" name="password" placeholder="your password..."
                    onChange={this.handleChange} />
                <br></br>
                <button onClick={this.signUp}>Sign Up</button>
            </div>

        );
    }
}

export default Login;