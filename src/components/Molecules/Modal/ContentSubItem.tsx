import React from 'react';

export default function ContentSubItem() {
    return (
        <div className="content-sub-tem mb-4 d-flex border justify-content-between p-2">
            <p className="subitem-name mb-0 mt-0">Documemtens</p>
            <div className="subitem-icon">
                 <img src={'/icons/arrow-down-dark.svg'} width={20} alt="arrow-down" />
            </div>
        </div>
    )
}