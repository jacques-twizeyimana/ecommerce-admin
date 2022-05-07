import '../../../styles/components/Organisms/Sidebar.scss';

import React from 'react';

import { sideBarItems } from '../../../services/sidebar';
import ListItem from '../../Molecules/Sidebar/ListItem';

export default function Sidebar() {
  return (
    <div className={'container bg-sidebar p-0'}>
      <div className="sidebar-header d-flex">
        <img src={'/assets/images/sass-logo-black.png'} width={185} alt="Logo" />
      </div>
      <div className="sidebar-list-items border">
        {sideBarItems.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
