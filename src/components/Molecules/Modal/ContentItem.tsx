import React from 'react';
import ContentSubHolder from '../../Atoms/Modal/ContentSubHolder';

export default function ContentItem() {
    return (
        <div className="content-item mb-4">
            <h6 className="item-name">Documemtens <img src={'/icons/arrow-down-dark.svg'} width={20} alt="arrow-down" /></h6>
            <div className="col-11">
                <ContentSubHolder/>
            </div>
        </div>
    )
}