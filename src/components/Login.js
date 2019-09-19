import React from "react"
import fire from "../config/fire"
import "../css/login.css"


class Login extends React.Component {
    state = {
        email: '',
        password: '',

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login = (e) => {
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/projects')
            })

            .catch((error) => alert("Wrong email or password"))
        this.setState({
            email: "",
            password: ""
        })

    }

    render() {

        return (
            <div className="login-container" >
                <h3>Have an account?</h3>
                <p>Email:</p>
                <input value={this.state.email}
                    type="email" name="email" placeholder="your email..."
                    onChange={this.handleChange} />
                <p>Password:</p>
                <input value={this.state.password}
                    type="password" name="password" placeholder="your password..."
                    onChange={this.handleChange} />
                <br></br>
                <button className="login-button" onClick={this.login}>LogIn</button>

            </div>

        );

    }
}

export default Login;