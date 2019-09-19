import React from "react"
import fire from "../config/fire"
import Projects from "./Projects"
import '../css/create.css'


class Login extends React.Component {
    state = {
        title: '',
        content: '',
        uid: this.props.userUid,

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addProject = e => {

        if (this.state.title !== "" & this.state.content !== "") {
            const db = fire.firestore();
            db.collection("projects").add({
                title: this.state.title,
                content: this.state.content,
                uid: this.state.uid
            });

            this.setState({
                title: "",
                content: ""
            });

        } else { return null }
    };

    render() {

        return (
            <div className="create-project">
                <div className="create-container">
                    <h2>{this.props.userMail}</h2>

                    <p className>Title:</p>
                    <input className="title" value={this.state.title}
                        type="text" name="title" placeholder="title"
                        onChange={this.handleChange} />
                    <p>Content:</p>
                    <input className="content" value={this.state.content}
                        type="text" name="content" placeholder="content"
                        onChange={this.handleChange} />
                    <br></br>
                    <button className="create-button" onClick={this.addProject}>Create</button>
                </div>
                <div className="projects-display"><Projects content={this.state.content} userUid={this.props.userUid} /></div>

            </div>

        );
    }
}

export default Login;