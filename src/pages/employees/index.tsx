import React from 'react';
import Table from '../../components/Organisms/Table';
import { EmployeeTableProps, TableActionsType } from '../../types/props';
import Breadcrump from '../../components/Molecules/Breadcrump';
import { useNavigate } from 'react-router-dom';
import {nationalityStore} from '../../store/nationality.store';
import {employeeStore} from '../../store/employees.store';
import { IEmployee } from '../../types/services/employees.types';



export default function Employees() {
  const navigate = useNavigate();
  
  const { data: nationalities } = nationalityStore.getAll();
  const { data: employees } = employeeStore.getAll();

  console.log(employees);
  const actions: TableActionsType<IEmployee>[] = [
    {
      name: 'View',
      icon: 'add',
      handleAction: (item: IEmployee) => {
        console.log('dsfadsfa', item);
      },
    },
    {
      name: 'Edit',
      icon: 'add',
      handleAction: (item: IEmployee) => {
        console.log(item);
      },
    },
    {
      name: 'delete',
      icon: 'add',
      handleAction: (item: IEmployee) => {
        alert('deleted ' + item['Grafiko Nr.']);
      },
    },
    
  ];
  

  const handleClickRow = () => {
    navigate('/dashboard/employees/1');
  }
  const onChangePage = (_page: number) => {
    console.log('change');
    return {}
  }
    return (
        <div className='mb-5'>
            <EmployeeTable 
                data={employees}
                uniqueCol="Sutarties Nr."
                hide={['Sutarties Nr.']}
                actions={actions}
                handleClickRow={handleClickRow}
                onChangePage={onChangePage}
                />
        </div>
    )
}








const EmployeeTable = (props: EmployeeTableProps) => {
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
        />
      </div>
    </div>
  );
}

