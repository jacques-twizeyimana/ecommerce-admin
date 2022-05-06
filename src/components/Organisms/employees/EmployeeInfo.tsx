import React from 'react';

import { EmployeeDto } from '../../../types/services/employees.types';
import Button from '../../Molecules/Button/Button';
import Details from '../../Molecules/custom/Details';
import PopupModal from '../Modals/PopupModal';
import SideModal from '../Modals/SideModal';
import AddNewEmployeeModal from './AddNewEmployeeModal';

export default function EmployeeInfo(props: { employee: EmployeeDto }) {
  const [popupModalShow, setPopupModalShow] = React.useState(false);
  const [rightModalShow, setRightModalShow] = React.useState(false);

  let basicInfo = {},
    workingCondition = {},
    residenceInfo = {},
    drivingLicense = {},
    clothingSize = {},
    otherInfo = {},
    contactInfo = {};

  console.log(props.employee);

  if (props.employee) {
    basicInfo = {
      Darbo: props.employee?.employeeRole.name,
      'Grafiko Nr.': props.employee?.address,
      Pareigos: props.employee.employeeRole?.name,
      'Sutarties Nr.': props.employee.contractNumber,
      'Įdarbinimo pradžia': props.employee.startDate,
      'Sodros Nr.': props.employee.seqNumber,
      'Pirmoji darbo diena': '',
      Šalis: props.employee.country,
      Etatas: props.employee.city,
      'Asmens kodas': '0000000000',
      'Darbo savaitės trukmė': '6 dienos',
      Darbuotojas: props.employee.firstName + ' ' + props.employee.lastName,
      Statusas: props.employee.isActive ? 'Active' : 'InActive',
    };

    workingCondition = {
      Atlyginimas: props.employee.salary,
      Gyvenamoji: props.employee.address,
      Telefonas: props.employee.phone,
      //   'Gyvenamoji vieta': 'nėra duomenų',
      'El. paštas': props.employee.email,
      Adresas: props.employee.address,
    };

    residenceInfo = {
      // Gyvenamoji vieta
      'Gyvenamoji vieta': props.employee.address,
      Adresas: props.employee.address,
    };

    drivingLicense = {
      // Vairuotojo pažymėjimas
      Numeris: props.employee.drivingLicense.name,
      Kategorija: props.employee.drivingLicense.name,
    };

    clothingSize = {
      Batai: props.employee.clothings[1].type.name,
      Kelnės: props.employee.clothings[0].type.name,
      Švarkas: props.employee.clothings[0].type.name,
    };

    otherInfo = {
      Informacija: props.employee.otherInfo,
    };

    contactInfo = {
      // Kontaktiniai duomenys
      'Grafiko Nr.': props.employee.contractNumber,
      'Sutarties Nr.': props.employee.contractNumber,
      'Sodros Nr.': props.employee.seqNumber,
      Šalis: props.employee.country,
      'Asmens kodas': props.employee.personalIdentificationNumber,
      Darbuotojas: props.employee.firstName + ' ' + props.employee.lastName,
      Statusas: props.employee.isActive ? 'Active' : 'InActive',
    };
  }

  return (
    <React.Fragment>
      {props.employee ? (
        <div className="py-4 px-5 bg-white">
          <div className="p-2 border d-inline-block">
            <div className=" w-20 h-20 border rounded-circle text-center text-sm">
              {/* Photo placeholder */}
              <img
                src={props.employee?.profileUrl!}
                width={85}
                style={{ borderRadius: '50%', marginLeft: '-3px', marginTop: '1px' }}
                alt="Profile url"
              />
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
              <Details title="Vairuotojo pažymėjimas" data={drivingLicense} />
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

          <AddNewEmployeeModal
            show={rightModalShow}
            className={'side-modal'}
            setShow={setRightModalShow}
            onHide={() => setRightModalShow(false)}
            employeeId={props.employee.id}
            isUpdating={true}
          />
        </div>
      ) : null}
    </React.Fragment>
  );
}
