import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Sidebar from '../../components/Organisms/sidebar/Sidebar';
import PopupModal from '../../components/Organisms/Modals/PopupModal';
import SideModal from '../../components/Organisms/Modals/SideModal';
import {Button} from 'react-bootstrap';

export default function Employees() {
    return (
        <div>
            <MainLayout  children={<Modal/>}/>
        </div>
    )
}


const Modal = () => {
    const [popupModalShow, setPopupModalShow] = React.useState(false);
    const [rightModalShow, setRightModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setPopupModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <Button variant="primary" onClick={() => setRightModalShow(true)}>
          Launch full left modal
        </Button>
  
        <PopupModal
          show={popupModalShow}
          onHide={() => {setPopupModalShow(false)}}
          setShow={setPopupModalShow}
        />

        <SideModal
          show={rightModalShow}
          className={'side-modal'}
          setShow={setRightModalShow}
          onHide={() => setRightModalShow(false)}
        />
      </>
    );
}