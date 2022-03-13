'use strict';
import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="text" className={'mt-10'} value={'asd'}/>
        );
    }
}

export default Input;
