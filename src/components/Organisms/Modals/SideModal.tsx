import '../../../styles/components/Organisms/Modal.scss';

import React from 'react';
import Modal, { ModalProps } from 'react-bootstrap/Modal';

import { modalItems } from '../../../services/modal';
import { IModal } from '../../../types/services/modal.types';
import Button from '../../Molecules/Button/Button';
import ContentItem from '../../Molecules/Modal/ContentItem';
import Heading from '../../Molecules/Text/Heading';

export default function SideModal(props: ModalProps) {
  const closeModal = () => {
    props.setShow(false);
  };
  return (
    <div className="side-modal">
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <div className="body-header p-4 mb-2 d-flex justify-content-between">
            <Heading text={'Atnaujinti duomenis'} />
            <button className="btn w-auto close-icon" onClick={closeModal}>
              <span className="close-txt">Uždaryti</span>
              <img
                src={'/icons/close-icon.svg'}
                className="cursor-pointer"
                width={30}
                alt="close-icon"
              />
            </button>
          </div>
          <div className="body-content px-4">
            {modalItems.map((item: IModal) => (
              <ContentItem item={item} key={item.id} />
            ))}
          </div>
          <div className="body-modal-footer row px-4">
            <div className="col-3 mr-2">
              <Button className="text-capitalize b-radius">Išsaugoti</Button>
            </div>
            <div className="col-3">
              <Button className="text-capitalize b-radius light">Atšaukti</Button>s
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
                <div className="d-flex w-100 m-0">
                    <div className="col-6">
                        <Button children={'Kurti naują'} className={'whitish curved-border-left'}/>
                    </div>
                    <div className="col-6">
                        <Button children={'Uždaryti'} className={'blueish curved-border-right'}/>
                    </div>
                </div>
            </Modal.Footer> */}
      </Modal>
    </div>
  );
}
