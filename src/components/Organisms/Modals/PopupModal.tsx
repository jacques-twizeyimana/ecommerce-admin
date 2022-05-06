import '../../../styles/components/Organisms/Modal.scss';

import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { ModalProps } from '../../../types/props';
import Button from '../../Molecules/Button/Button';

export default function PopupModal(props: ModalProps) {
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="modal-content-area pt-4 pb-2">
          <img src={'/icons/success.svg'} width={50} alt="success" />
        </div>
        <p className="text-align-center message mb-4">
          Darbuotojas pridėtas <span className="font-weight-bold">sėkmingai </span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex w-100 m-0">
          <div className="col-6">
            <Button className={'whitish curved-border-left'}>Kurti naują</Button>
          </div>
          <div className="col-6">
            <Button className={'blueish curved-border-right'}>Uždaryti</Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
