import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Breadcrump from '../../components/Molecules/Breadcrump';
import AddNewEmployeeModal from '../../components/Organisms/employees/AddNewEmployeeModal';
import PopupModal from '../../components/Organisms/Modals/PopupModal';
import Table from '../../components/Organisms/Table';
import useAuthenticator from '../../hooks/useAuthenticator';
import { employeeStore } from '../../store/employees.store';
import { EmployeeTableProps, TableActionsType } from '../../types/props';
import { EmployeeTableDto } from '../../types/services/employees.types';

export default function Employees() {
  const navigate = useNavigate();

  const { user } = useAuthenticator();
  console.log('User', user);

  const { data: employeesData } = employeeStore.getAll();

  const employees: EmployeeTableDto[] = [];
  if (employeesData) {
    for (const employeeData of employeesData.data) {
      employees.push({
        id: employeeData.id,
        seqNumber: employeeData.seqNumber,
        name: `${employeeData.firstName} ${employeeData.lastName}`,
        address: employeeData.address,
        email: employeeData.email,
        phone: employeeData.phone,
        isActive: employeeData.isActive,
      });
    }
  }

  console.log('Emplooyees', employees);

  const actions: TableActionsType<EmployeeTableDto>[] = [
    {
      name: 'View',
      icon: 'add',
      handleAction: (item: EmployeeTableDto) => {
        console.log('dsfadsfa', item);
      },
    },
    {
      name: 'Edit',
      icon: 'add',
      handleAction: (item: EmployeeTableDto) => {
        console.log(item);
      },
    },
    {
      name: 'delete',
      icon: 'add',
      handleAction: (item: EmployeeTableDto) => {
        alert('deleted ' + item['id']);
      },
    },
  ];

  const handleClickRow = (row: EmployeeTableDto) => {
    console.log(row);
    navigate(`/dashboard/employees/${row.id}`);
  };
  const onChangePage = (_page: number) => {
    return {};
  };
  console.log(employees);
  return (
    <div className="mb-5">
      <EmployeeTable
        data={employees || []}
        uniqueCol="id"
        hide={['id']}
        actions={actions}
        handleClickRow={handleClickRow}
        onChangePage={onChangePage}
      />
    </div>
  );
}

const EmployeeTable = (props: EmployeeTableProps) => {
  const [isAddNewModalOpen, setisAddNewModalOpen] = useState(false);
  const [isSuccessModalOpen, setisSuccessModalOpen] = useState(false);

  return (
    <div className="px-3">
      <div className="">
        <Breadcrump title="Darbuotojai" navigation={['Žmonių valdymas', 'Darbuotojai']} />
      </div>
      <div className="mt-4">
        <Table
          data={props.data}
          uniqueCol={props.uniqueCol}
          hide={props.hide}
          rowsPerPage={10}
          totalPages={10}
          actions={props.actions}
          handleClickRow={props.handleClickRow}
          onChangePage={props.onChangePage}
          addNewButtonText="Registruoti naują"
          onClickAddNewButton={() => setisAddNewModalOpen(true)}
        />
      </div>
      <AddNewEmployeeModal
        handleSuccess={() => setisSuccessModalOpen(true)}
        show={isAddNewModalOpen}
        setShow={setisAddNewModalOpen}
        onHide={() => setisAddNewModalOpen(false)}
        className={'side-modal'}
      />
      <PopupModal
        isUpdate={false}
        show={isSuccessModalOpen}
        onHide={() => setisSuccessModalOpen(false)}
        setShow={setisSuccessModalOpen}
      />
    </div>
  );
};
