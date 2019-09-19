import React from "react"
import fire from "../config/fire"
import Card from "./Card"
import "../css/projects.css"
class Projects extends React.Component {
    state = {
        cards: [""]
    }

    componentDidMount() {
        const db = fire.firestore()
        db.collection("projects")
            .orderBy("title", "desc")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({
                    cards: data
                });
            });

    }
    componentDidUpdate(prevProps) {
        if (prevProps.content !== this.props.content) {
            const db = fire.firestore()
            db.collection("projects")
                .orderBy("title", "desc")
                .get()
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data());
                    this.setState({
                        cards: data
                    });
                });

        }
    }
    render() {
        return <div className="conteinarwithscroll-projects">
            {this.state.cards.map((card) => (<Card userUid={this.props.userUid} card={card} date={this.state.date} />)
            )}
        </div>
    }
}

export default Projects;