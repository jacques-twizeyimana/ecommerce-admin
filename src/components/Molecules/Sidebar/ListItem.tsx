import React, {useState} from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import { ListItemProps } from '../../../types/props';
import ListSubItem from '../../Atoms/Sidebar/ListSubItem';

export default function ListItem(props: ListItemProps) {
    const [open, setOpen] = useState(false);
    const toogleDropper = () => {
        setOpen(!open);
    }
    return (
        <div className="list-items">
            <p className="mb-0 mt-0">{props.item.name} 
                {(props.item.subItems) ? 
                open ? 
                <img src='/icons/arrow-up.svg' alt='arrow-down' onClick={toogleDropper} />:
                <img src='/icons/arrow-down.svg' onClick={toogleDropper} alt='arrow-down' />: null}
            </p>
            {open ? 
                <div className="subitem-area">
                    {props.item.subItems?.map((item) => (
                        <ListSubItem items={item} />
                    ))}
                </div>
                : null
        }
            
        </div>
    )
}