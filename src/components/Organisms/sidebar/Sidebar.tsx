import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import ListItem from '../../Molecules/Sidebar/ListItem';
import {sideBarItems} from '../../../services/sidebar';
import useAuthenticator from '../../../hooks/useAuthenticator';
import { IRole } from '../../../types/services/user.types';
import {containsAll} from '../../../utils/utility';

export default function Sidebar() {
    const {user} = useAuthenticator();

    return (
        <React.Fragment>
            {user ? <div className={'container bg-sidebar p-0'}>
                <div className="sidebar-header d-flex">
                    <img src={'/assets/images/sass-logo-black.png'} width={185} alt="Logo" />
                </div>
                <div className="sidebar-list-items border">
                    {sideBarItems.map((item) => (
                        item.allowedRoles ?
                        containsAll(user?.currentUserRoles!, item.allowedRoles!) ? 
                            <ListItem key={item.id} item={item} />: null  
                        : <ListItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            : null}
            
        </React.Fragment>
    )
}