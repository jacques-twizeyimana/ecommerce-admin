import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import ListSubItem from '../../Atoms/Sidebar/ListSubItem';

export default function ListItem() {
    return (
        <div className="list-items">
            <p className="mb-0 mt-0">Item 1 <img src='/icons/arrow-down.svg' alt='arrow-down' /></p>
            <div className="subitem-area">
                <ListSubItem />
            </div>
        </div>
    )
}