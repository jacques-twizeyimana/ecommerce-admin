import React from 'react';
import ContentSubItem from '../../Molecules/Modal/ContentSubItem';

export default function ContentSubHolder() {
    return (
        <div className="content-sub-holder border d-flex p-3">
            <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3 holder">
                <ContentSubItem/>
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3 holder">
                <ContentSubItem/>
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-3 col-lg-3 holder">
                <ContentSubItem/>
            </div>
        </div>
    )
}