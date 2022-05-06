import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/components/Organisms/Sidebar.scss';
import { ListItemProps } from '../../../types/props';
import ListSubItem from '../../Atoms/Sidebar/ListSubItem';

export default function ListItem(props: ListItemProps) {
    const navigate= useNavigate();
    const [open, setOpen] = useState(false);
    const toogleDropper = () => {
        setOpen(!open);
    }

    return (
        <div className="list-items">
            <p className="mb-0 mt-0">
                {/* {props.item.name} */}
                <span onClick={() => navigate(props.item.link!)}>{props.item.name}</span> 
                {(props.item.subItems) ? 
                open ? 
                <img src='/icons/arrow-up.svg' alt='arrow-down' onClick={toogleDropper} />:
                <img src='/icons/arrow-down.svg' onClick={toogleDropper} alt='arrow-down' />: null}
            </p>
            {open ? 
                <div className="subitem-area">
                    {props.item.subItems?.map((item, i) => (
                        <ListSubItem items={item} key={i} />
                    ))}
                </div>
                : null
        }
            
        </div>
    )
}