import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function Signin() {
    const {path} = useRouteMatch();
    console.log(path);

    return (
        <React.Fragment>
            <div className="container">
                Hello
            </div>
        </React.Fragment>
    )
}