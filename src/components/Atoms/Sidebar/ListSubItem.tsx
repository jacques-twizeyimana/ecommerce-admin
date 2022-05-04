import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import ListSubNestedItem from '../../Atoms/Sidebar/ListSubNestedItem';

export default function ListSubItem() {
    return (
        <React.Fragment>
            <div className="list-sub-items">
                {[0].map((e) => (
                    <React.Fragment>
                        <p className="mb-0 mt-0"><img src='/icons/dashboard.svg' className="label-icon" alt='Icon' /> Item 1 <img src='/icons/arrow-down-black.svg' alt='arrow-down' /> </p>
                        <div className="nested-items">
                            <ListSubNestedItem />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    )
}