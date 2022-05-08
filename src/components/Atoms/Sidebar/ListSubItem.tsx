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
    const [open, setOpen] = useState(false);
    const toogleDropper = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            {user ? 
            <div className="list-sub-items">

                {props.items.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div className="d-flex">
                           <p className="mb-0 mt-0">
                               <span className={`col-12 d-block  ${(item.id == 11) ? 'active-show' : ''}`}>
                                   <img src={`/icons/${item.icon}`} className="label-icon" alt='Icon' /> 
                               {item.link ?  <span onClick={() => navigate(item.link!)}>{item.name}</span> 
                               :
                                  <span onClick={() => navigate(item.link!)}>{item.name}</span> 
                }
                              
                          
                                      </span>  
                                      </p>
                                <div className="icon-holder bg-white d-flex" onClick={toogleDropper}>
                                {(item.nestedItems) ?
                                   open ? 
                                   <img src='/icons/arrow-up-black.svg' alt='arrow-down' width={18}  /> :
                                   <img src='/icons/arrow-down-dark.svg' alt='arrow-down' width={18} />: 
                                    null} 
                                </div>      
                        </div>         
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