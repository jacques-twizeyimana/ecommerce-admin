import React from 'react';
import '../../../styles/components/Organisms/Sidebar.scss';
import { ListSubItemProps } from '../../../types/props';
import ListSubNestedItem from '../../Atoms/Sidebar/ListSubNestedItem';

export default function ListSubItem(props: ListSubItemProps) {
    console.log('items', props);
    return (
        <React.Fragment>
            <div className="list-sub-items">
                {props.items.map((item) => (
                    <React.Fragment>
                        <p className="mb-0 mt-0">
                            <img src='/icons/dashboard.svg' className="label-icon" alt='Icon' /> 
                            {item.name}
                            {(item.nestedItems) ? <img src='/icons/arrow-down-black.svg' alt='arrow-down' />: null} </p>
                        <div className="nested-items">
                            {item.nestedItems?.map((it) => (
                                <ListSubNestedItem item={it}/>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    )
}