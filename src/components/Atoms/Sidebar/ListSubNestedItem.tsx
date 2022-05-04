import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';

export default function ListSubNestedItem() {
    return (
        <React.Fragment>
            <div className="list-nested-items">
                {[0, 1, 2, 4].map((e) => (
                    <p className="mb-0 mt-0"> Item 1  </p>
                ))}
            </div>
        </React.Fragment>
    )
}