import React from "react"
import '../css/card.css'
const Card = (props) => {

    if (props.userUid === props.card.uid) {
        return <div key={props.card.content}>

            <div className="card-style">
                <span>{props.card.title}</span>
                <p style={{ wordWrap: "break-word" }}>{props.card.content}</p>


            </div>

        </div>
    } else {
        return null
    }
}
export default Card;