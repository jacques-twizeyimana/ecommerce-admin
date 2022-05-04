import React from 'react';
import '../../../styles/components/Molecules/Avatar/Avatar.scss'
import Heading from '../Text/Heading';


export default function Avatar() {
    return (
        <div className="avatar d-flex">
            <span className="circle"></span>
            <p className="mb-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Jabes</p>
        </div>
    )
}