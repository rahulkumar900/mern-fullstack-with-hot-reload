import React from 'react';
import { hot } from 'react-hot-loader';
const HelloWprld = () => {
    return (
        <div>
            <h1>Hello World! from Client</h1>
            <p>Hot reload</p>
        </div>
    )
}

export default hot(module)(HelloWprld);