import React from "react"
import fire from "../config/fire"
class Home extends React.Component {
    state = {}
    logout = () => {
        fire.auth().signOut()
    }
    render() {
        return <>
            <h1>Witaj!</h1>
            <button onClick={this.logout}>Logout</button>
        </>
    }
}

export default Home;