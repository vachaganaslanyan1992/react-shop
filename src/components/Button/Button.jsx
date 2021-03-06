'use strict';
import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <button onClick={() => this.setState({ liked: true }) }>
                Like
            </button>
        );
    }
}

export default Button;

