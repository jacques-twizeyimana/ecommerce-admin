import React from 'react';

import {
  basicInfo,
  clothingSize,
  contactInfo,
  drivingLicence,
  otherInfo,
  residenceInfo,
  workingCondition,
} from '../../../utils/static/employee';
import Button from '../../Molecules/Button/Button';
import Details from '../../Molecules/custom/Details';
import PopupModal from '../Modals/PopupModal';
import SideModal from '../Modals/SideModal';

export default function EmployeeInfo() {
  const [popupModalShow, setPopupModalShow] = React.useState(false);
  const [rightModalShow, setRightModalShow] = React.useState(false);

  // const Modal = () => {
  //     const [popupModalShow, setPopupModalShow] = React.useState(false);
  //     const [rightModalShow, setRightModalShow] = React.useState(false);

  //     return (
  //       <>
  //         <Button variant="primary" onClick={() => setPopupModalShow(true)}>
  //           Launch vertically centered modal
  //         </Button>

  //         <Button variant="primary" onClick={() => setRightModalShow(true)}>
  //           Launch full left modal
  //         </Button>

  //         <PopupModal
  //           show={popupModalShow}
  //           onHide={() => {setPopupModalShow(false)}}
  //           setShow={setPopupModalShow}
  //         />

  //         <SideModal
  //           show={rightModalShow}
  //           className={'side-modal'}
  //           setShow={setRightModalShow}
  //           onHide={() => setRightModalShow(false)}
  //         />
  //       </>
  //     );
  // }
  return (
    <div className="py-4 px-5 bg-white">
      <div className="p-2 border d-inline-block">
        <div className=" w-20 h-20 border rounded-circle text-center text-sm">
          {/* Photo placeholder */}
        </div>
      </div>
      <div className="action py-3 row">
        {/* <button className="d-inline-block w-auto py-3 text-xs text-lowercase rounded">
          Atnaujinti duomenis
        </button> */}
        <div className="col-3 mr-3">
          <Button
            onClick={() => setRightModalShow(true)}
            className="text-capitalize b-radius">
            Atnaujinti duomenis
          </Button>
        </div>
        <div className="col-3 ml-3">
          <Button
            className="text-capitalize b-radius light"
            onClick={() => setPopupModalShow(true)}>
            Archyvuoti darbuotoją
          </Button>
        </div>
        {/* <button className="mx-2 d-inline-block w-auto py-3 text-sm text-lowercase rounded">
          Archyvuoti darbuotoją
        </button> */}
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Details title="Duomenys" data={basicInfo} />
        </div>
        <div className="col-12 col-md-6">
          <Details title="Kontaktiniai duomenys" data={contactInfo} />
        </div>

        <div className="col-12 col-md-6">
          <Details title="Kontaktiniai duomenys" data={workingCondition} />
        </div>

        <div className="col-12 col-md-6">
          <Details title="Gyvenamoji vieta" data={residenceInfo} />
        </div>

        <div className="col-12 col-md-6">
          <Details title="Vairuotojo pažymėjimas" data={drivingLicence} />
        </div>

        <div className="col-12 col-md-6">
          <Details title="Avalynės ir drabužių dydžiai" data={clothingSize} />
        </div>
        <div className="col-12 col-md-6">
          <Details title="Kita info" data={otherInfo} />
        </div>
      </div>
      <PopupModal
        show={popupModalShow}
        onHide={() => {
          setPopupModalShow(false);
        }}
        setShow={setPopupModalShow}
      />

      <SideModal
        show={rightModalShow}
        className={'side-modal'}
        setShow={setRightModalShow}
        onHide={() => setRightModalShow(false)}
      />
    </div>
  );
}
