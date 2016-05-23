import React from "react";
import ReactDom from "react-dom";

class LikeButton extends React.Component {
    render() {
        return (
            React.createElement(
                "div",
                null,
                "button"
            )
        );
    }
}

ReactDom.render(
    React.createElement('LikeButton'),
    document.getElementById('like-button')
);

