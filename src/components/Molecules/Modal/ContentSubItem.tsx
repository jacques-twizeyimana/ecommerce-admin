import React from 'react';
import { ModalSubItem } from '../../../types/services/modal.types';


interface ContentSubItemProps {
    item: ModalSubItem
}
export default function ContentSubItem(props: ContentSubItemProps) {
    return (
        <div className="content-sub-item mb-3 d-flex border justify-content-between p-2">
            <p className="subitem-name mb-0 mt-0">{props.item.name}</p>

            {props.item.icon ? 
            <div className="subitem-icon">
                <img src={'/icons/arrow-down-dark.svg'} width={20} alt="arrow-down" />
            </div>: null
       }
            
        </div>
    )
}