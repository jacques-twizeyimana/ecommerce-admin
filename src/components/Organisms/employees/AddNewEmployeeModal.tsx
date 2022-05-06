import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { ValueType } from '../../../types';
import { ICreateEmployee, ModalProps } from '../../../types/props';
import Input from '../../Atoms/Form/Input';
import Heading from '../../Atoms/Heading';
import Collapsible from '../../Molecules/Modal/Collapsible';

interface IModalProps extends ModalProps {
  employeeId?: string;
  isUpdating?: boolean;
}

export default function AddNewEmployeeModal({
  setShow,
  employeeId,
  isUpdating = false,
  ...props
}: IModalProps) {
  const closeModal = () => {
    setShow(false);
  };

  console.log('employeeId', employeeId);

  const [values, setvalues] = useState<ICreateEmployee>({
    profileUrl: '',
    firstName: '',
    lastName: '',
    seqNumber: '',
    contractNumber: '',
    socialSecurityNumber: '',
    nationalityId: '',
    personalIdentificationNumber: '',
    employeeRoleId: '',
    employmentTypeId: '',
    employmentTermId: '',
    workingWeekId: '',
    salary: 0,
    startDate: '',
    endDate: '',
    regDate: '',
    phone: '',
    email: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
    bankCode: '',
    bankAccountNumber: '',
    drivingLicenseId: '',
    otherInfo: '',
    clothingIds: [''],
  });

  const handleChange = (e: ValueType) => {
    setvalues({ ...values, [e.name]: e.value });
  };

  return (
    <div className="side-modal">
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <div className="body-header p-4 mb-2 d-flex justify-content-between">
            <Heading>{isUpdating ? 'Atnaujinti duomenis' : 'Registruoti naują'}</Heading>
            <button className="close-icon btn w-auto" onClick={closeModal}>
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
            <Collapsible isOpen={true} title="Duomenys">
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <div className="profile-pic w-20 h-20">
                    <div className="w-20 h-20 border rounded-circle text-center text-sm">
                      {/* Photo placeholder */}
                    </div>
                  </div>
                  <div className="profile-info w-100 row px-3">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-2">
                      <Input
                        name="seqNumber"
                        handleChange={handleChange}
                        placeholder="Grafiko Nr.*"
                        value={values.seqNumber}
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-2">
                      <Input
                        className="mr-3"
                        name="contractNumber"
                        handleChange={handleChange}
                        placeholder="Sutarties Nr."
                        value={values.contractNumber}
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-2">
                      <Input
                        name="socialSecurityNumber"
                        handleChange={handleChange}
                        placeholder="Sodros Nr."
                        value={values.socialSecurityNumber}
                      />
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-2">
                      <Input
                        name="country"
                        handleChange={handleChange}
                        placeholder="Salis*"
                        value={values.nationalityId}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                    <Input
                      name="nationalityId"
                      handleChange={handleChange}
                      placeholder="Asmes kodas"
                      value={values.personalIdentificationNumber}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                    <Input
                      name="firstName"
                      handleChange={handleChange}
                      placeholder="Vardas"
                      value={values.firstName}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                    <Input
                      name="lastName"
                      handleChange={handleChange}
                      placeholder="Parvarde"
                      value={values.lastName}
                    />
                  </div>
                </div>
              </div>
            </Collapsible>
            <Collapsible isOpen={true} title="Darbo salygos">
              <div className="p-3 row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="employeeRoleId"
                    handleChange={handleChange}
                    placeholder="Pareigos"
                    value={values.employeeRoleId}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    className="mr-3"
                    type="date"
                    name="regDate"
                    handleChange={handleChange}
                    placeholder="Idarbinimo data Nr."
                    value={values.regDate}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="startDate"
                    type="date"
                    handleChange={handleChange}
                    placeholder="Pirmoji darbo diena"
                    value={values.startDate}
                  />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="employmentTermId"
                    handleChange={handleChange}
                    placeholder="Sutarties tipas"
                    value={values.employmentTermId}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="employmentTypeId"
                    handleChange={handleChange}
                    placeholder="Etatas"
                    value={values.employmentTypeId}
                  />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="workingWeekId"
                    handleChange={handleChange}
                    placeholder="Darbo savaite"
                    value={values.workingWeekId}
                  />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="salary"
                    type="number"
                    handleChange={handleChange}
                    placeholder="Atlyginimas"
                    value={values.salary}
                  />
                </div>
              </div>
            </Collapsible>
            <Collapsible isOpen={true} title="Kontaktiniai duomenys">
              <div className="p-3 row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="phone"
                    type="tel"
                    handleChange={handleChange}
                    placeholder="Telefonas"
                    value={values.phone}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    className="mr-3"
                    name="email"
                    handleChange={handleChange}
                    placeholder="El. paštas"
                    value={values.email}
                  />
                </div>
              </div>
            </Collapsible>
            <Collapsible isOpen={true} title="Gyvenamoji vieta">
              <div className="p-3 row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="address"
                    handleChange={handleChange}
                    placeholder="Adresas"
                    value={values.address}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    className="mr-3"
                    name="postalCode"
                    handleChange={handleChange}
                    placeholder="Pašto kodas"
                    value={values.postalCode}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="city"
                    handleChange={handleChange}
                    placeholder="Miestas"
                    value={values.city}
                  />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="country"
                    handleChange={handleChange}
                    placeholder="Valstybė"
                    value={values.country}
                  />
                </div>
              </div>
            </Collapsible>
            <Collapsible isOpen={true} title="Banko rekvizitai">
              <div className="p-3 row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="firstName"
                    handleChange={handleChange}
                    placeholder="Graffiko Nr."
                    value={values.firstName}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    className="mr-3"
                    name="firstName"
                    handleChange={handleChange}
                    placeholder="Graffiko Nr."
                    value={values.firstName}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="firstName"
                    handleChange={handleChange}
                    placeholder="Graffiko Nr."
                    value={values.firstName}
                  />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="firstName"
                    handleChange={handleChange}
                    placeholder="Graffiko Nr."
                    value={values.firstName}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="firstName"
                    handleChange={handleChange}
                    placeholder="Graffiko Nr."
                    value={values.firstName}
                  />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    name="firstName"
                    handleChange={handleChange}
                    placeholder="Graffiko Nr."
                    value={values.firstName}
                  />
                </div>
              </div>
            </Collapsible>

            <Collapsible isOpen={true} title="Darbo laikas">
              <div className="p-3 row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                  <Input
                    className="mr-3"
                    name="firstName"
                    handleChange={handleChange}
                    placeholder="Graffiko Nr."
                    value={values.firstName}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-8 p-2">
                  <Input
                    name="firstName"
                    handleChange={handleChange}
                    placeholder="Graffiko Nr."
                    value={values.firstName}
                  />
                </div>
              </div>
            </Collapsible>
          </div>
          <div className="body-modal-footer row px-4">
            <div className="col-3 mr-2">
              <Button className="text-capitalize b-radius">Išsaugoti</Button>
            </div>
            <div className="col-3">
              <Button className="text-capitalize b-radius light" onClick={closeModal}>
                Atšaukti
              </Button>
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
