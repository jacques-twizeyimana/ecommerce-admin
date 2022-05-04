import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import { ListItemProps } from '../../../types/props';
import ListSubItem from '../../Atoms/Sidebar/ListSubItem';

export default function ListItem(props: ListItemProps) {
    return (
        <div className="list-items">
            <p className="mb-0 mt-0">{props.item.name} 
                {(props.item.subItems) ? <img src='/icons/arrow-up.svg' alt='arrow-down' />: null}
            </p>
            <div className="subitem-area">
                {props.item.subItems?.map((item) => (
                    <ListSubItem items={item} />
                ))}
            </div>
        </div>
    )
}