import React, {useState} from 'react';
import { ContentItemProps } from '../../../types/props';
import ContentSubHolder from '../../Atoms/Modal/ContentSubHolder';

export default function ContentItem(props: ContentItemProps) {
    const [open, setOpen] = useState(false);
    
    const toogleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className="content-item mb-4">
            <h6 className="item-name">{props.item.name} 
                 {props.item.subItems ? 
                    open ? <img src={'/icons/arrow-up-black.svg'} width={20} alt="arrow-down"  onClick={toogleOpen}/> :
                    <img src={'/icons/arrow-down-dark.svg'} width={20} alt="arrow-down" onClick={toogleOpen} /> : null}</h6>
          
            {open ? 
                <div className="col-11">
                    {props.item.subItems ? <ContentSubHolder items={props.item.subItems}/>: null}
                </div> 
                : null
        }  
        </div>
    )
}