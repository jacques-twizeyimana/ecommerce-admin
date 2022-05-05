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
import Details from '../../Molecules/custom/Details';

export default function EmployeeInfo() {
  return (
    <div className="py-4 px-5 bg-white">
      <div className="p-2 border d-inline-block">
        <div className=" w-20 h-20 border rounded-circle text-center text-sm">
          Photo placeholder
        </div>
      </div>
      <div className="action py-3">
        <button className="d-inline-block w-auto py-3 text-xs text-lowercase rounded">
          Atnaujinti duomenis
        </button>
        <button className="mx-2 d-inline-block w-auto py-3 text-sm text-lowercase rounded">
          Archyvuoti darbuotoją
        </button>
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
    </div>
  );
}
