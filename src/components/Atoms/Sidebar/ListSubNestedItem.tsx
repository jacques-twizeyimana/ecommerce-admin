import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import { ListSubNestedItemProps } from '../../../types/props';

export default function ListSubNestedItem(props: ListSubNestedItemProps) {
    console.log('nested', props);
    return (
        <React.Fragment>
            <div className="list-nested-items">
                <p className="mb-0 mt-0"> {props.item.name} </p>
            </div>
        </React.Fragment>
    )
}