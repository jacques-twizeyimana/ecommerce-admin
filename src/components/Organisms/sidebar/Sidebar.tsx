import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import ListItem from '../../Molecules/Sidebar/ListItem';

export default function Sidebar() {
    return (
        <div className={'container bg-sidebar p-0'}>
            <div className="sidebar-header d-flex">
                <img src={'/assets/images/sass-logo-black.png'} width={185} alt="Logo" />
            </div>
            <div className="sidebar-list-items border">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />

            </div>
        </div>
    )
}