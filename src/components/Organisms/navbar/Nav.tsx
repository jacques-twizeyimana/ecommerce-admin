import React from 'react';
import '../../../styles/components/Organisms/Nav.scss'
import Input from '../../Atoms/Form/Input';
import Avatar from '../../Molecules/Avatar/Avatar';

export default function Nav() {
    return (
        <div className="bg-navbar d-flex">
            <div className="menu-area mr-2 col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <img src={'/icons/menu.svg'} style={{verticalAlign: 'text-bottom'}} alt={'Menu Iccon'} />
            </div>
            <div className="search-area col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-2 d-flex">
                <img src={'/icons/search.svg'} width={13}  alt={'Search Iccon'} />
                <Input placeholder={'Greita paieška'} bgStyles={false} inputColor={'#2D5474'}/>
            </div>
            {/* <div className="scol-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-6 d-flex"/> */}
            <div className="user-panel  col-xs-1 col-sm-1 col-md-4 col-lg-2 col-xl-2 ml-auto d-flex">
                <img src={'/icons/message.svg'}  alt={'Message Iccon'} />
                <img src={'/icons/notification.svg'} alt={'Notification Iccon'} />
                <Avatar />
            </div>
        </div>
    )
}