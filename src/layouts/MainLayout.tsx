import React from 'react';
import '../styles/layouts/MainLayout.scss';
import Nav from '../components/Organisms/navbar/Nav';
import Sidebar from '../components/Organisms/sidebar/Sidebar';

export default function MainLayout({children}) {
    return (
         <div className={"container-fluid bg"}>
            <div className="row">
                <div className={" d-md-none pt-2 rounded-circle shadow-sm cursor-pointer text-center"} onClick={() => {console.log('dsfa')}}>
                    { (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                        )
                    }
                </div>
                <div className={("col-0 d-none") +" d-md-block col-md-3 col-lg-2 p-0 "}>
                    <div className="sidebar-content">
                        <Sidebar />
                    </div>
                </div>
                <div
                    className={"col-lg-10 col-12 p-0"}>
                    <Nav/>
                    <div className={" main-content "} >{children}</div>
                </div>
            </div>
        </div>
    )
}