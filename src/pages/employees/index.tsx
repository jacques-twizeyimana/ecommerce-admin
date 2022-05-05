import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Sidebar from '../../components/Organisms/sidebar/Sidebar';
import PopupModal from '../../components/Organisms/Modals/Modal';
import {Button} from 'react-bootstrap';

export default function Employees() {
    return (
        <div>
            <MainLayout  children={<Modal/>}/>
        </div>
    )
}


const Modal = () => {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <PopupModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}