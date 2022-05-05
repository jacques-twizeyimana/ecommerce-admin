import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../../styles/components/Organisms/Modal.scss';
import Button from '../../Molecules/Button/Button'
import Heading from '../../Molecules/Text/Heading';
import ContentItem from '../../Molecules/Modal/ContentItem';

export default function SideModal(props: any) {
    return (
      <div className="side-modal">
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
               <div className="body-header p-4 mb-2 d-flex justify-content-between">
                    <Heading text={'Atnaujinti duomenis'} />
                    <div className="close-icon">
                       <span className="close-txt">Uždaryti</span>
                       <img src={'/icons/close-icon.svg'} className="cursor-pointer" width={30} alt="close-icon"/>
                    </div>
               </div>
               <div className="body-content px-4">
                  <ContentItem />
                  <ContentItem />
                  <ContentItem />
                  <ContentItem />
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
  

  