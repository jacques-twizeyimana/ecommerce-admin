import React, {useState} from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import { ListSubItemProps } from '../../../types/props';
import ListSubNestedItem from '../../Atoms/Sidebar/ListSubNestedItem';

export default function ListSubItem(props: ListSubItemProps) {

    const [open, setOpen] = useState(false);
    const toogleDropper = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <div className="list-sub-items">
                {props.items.map((item) => (
                    <React.Fragment>
                        <p className="mb-0 mt-0">
                            <img src={`/icons/${item.icon}`} className="label-icon" alt='Icon' /> 
                            {item.name}
                            {(item.nestedItems) ?
                                open ? 
                                <img src='/icons/arrow-up-black.svg' alt='arrow-down' onClick={toogleDropper} /> :
                                <img src='/icons/arrow-down-dark.svg' alt='arrow-down' onClick={toogleDropper} />: 
                                 null} </p>
                        {open ?
                            <div className="nested-items">
                                {item.nestedItems?.map((it) => (
                                    <ListSubNestedItem item={it}/>
                                ))}
                            </div>: null }         
                        
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    )
}