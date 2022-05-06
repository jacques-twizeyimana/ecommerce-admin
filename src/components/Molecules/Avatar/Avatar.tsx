import React from 'react';
import '../../../styles/components/Molecules/Avatar/Avatar.scss'
import Heading from '../Text/Heading';


export default function Avatar(props: {name: string, profile: string}) {
    return (
        <div className="avatar d-flex">
            <img src={props.profile}  style={{borderRadius: '50%'}}/>
            <p className="mb-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.name}</p>
        </div>
    )
}