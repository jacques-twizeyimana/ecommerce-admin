import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthenticator from '../../../hooks/useAuthenticator';
import '../../../styles/components/Organisms/Sidebar.scss';
import { ListSubItemProps } from '../../../types/props';
import { containsAll } from '../../../utils/utility';
import ListSubNestedItem from '../../Atoms/Sidebar/ListSubNestedItem';

export default function ListSubItem(props: ListSubItemProps) {

    const navigate = useNavigate();
    const {user} = useAuthenticator();
    console.log('This is a user', user);
    const [open, setOpen] = useState(false);
    const toogleDropper = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            {user ? 
            <div className="list-sub-items">
            {/* {props.item.subItems?.map((item, i) => (
                    item.allowedRoles ?
                    containsAll(user?.currentUserRoles!, item.allowedRoles!) ? 
                    <ListSubItem items={item} key={i} />: null  
                    : <ListSubItem items={item} key={i} />
                ))} */}

                {props.items.map((item, i) => (
                    <React.Fragment key={item.id}>
                           <p className="mb-0 mt-0">
                               <span className={`col-12 d-block  ${(item.id == 11) ? 'active-show' : ''}`}>
                                   <img src={`/icons/${item.icon}`} className="label-icon" alt='Icon' /> 
                                  <span onClick={() => navigate(item.link)}>{item.name}</span> 
                              
                               {(item.nestedItems) ?
                                   open ? 
                                   <img src='/icons/arrow-up-black.svg' alt='arrow-down' onClick={toogleDropper} /> :
                                   <img src='/icons/arrow-down-dark.svg' alt='arrow-down' onClick={toogleDropper} />: 
                                    null} 
                                      </span>  
                                      </p>
                           {open ?
                               <div className="nested-items">
                                   {item.nestedItems?.map((it) => (
                                       <ListSubNestedItem item={it} key={it.id}/>
                                   ))}
                               </div>: null }         
                           
                       </React.Fragment>

                    
                ))}
            </div>
             : null} 
            
        </React.Fragment>
    )
}