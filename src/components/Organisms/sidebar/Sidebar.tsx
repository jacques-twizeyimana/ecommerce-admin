import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import ListItem from '../../Molecules/Sidebar/ListItem';
import {sideBarItems} from '../../../services/sidebar';

export default function Sidebar() {
    return (
        <div className={'container bg-sidebar p-0'}>
            <div className="sidebar-header d-flex">
                <img src={'/assets/images/sass-logo-black.png'} width={185} alt="Logo" />
            </div>
            <div className="sidebar-list-items border">
                {sideBarItems.map((item, i) => (
                    <ListItem key={i} item={item} />
                ))}
            </div>
        </div>
    )
}