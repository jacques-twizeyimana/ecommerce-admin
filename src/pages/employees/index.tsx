import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Sidebar from '../../components/Organisms/sidebar/Sidebar';
import PopupModal from '../../components/Organisms/Modals/PopupModal';
import SideModal from '../../components/Organisms/Modals/SideModal';
import {Button} from 'react-bootstrap';
import Table from '../../components/Organisms/Table';
import { TableActionsType } from '../../types/props';
import Heading from '../../components/Atoms/Heading';
import Breadcrump from '../../components/Molecules/Breadcrump';
import { useNavigate } from 'react-router-dom';

export default function Employees() {
  const navigate = useNavigate();
  const handleClickRow = () => {
    console.log();
    navigate('/dashboard/employees/1');
  }
    return (
        <div>
            <EmployeeTable handleClickRow={handleClickRow}/>
        </div>
    )
}

interface IEmployee {
  'Sutarties Nr.': number;
  'Grafiko Nr.': string;
  'Vardas Pavardė': string;
  'Pareigos': string;
  'Statusas': string;
}

const data: IEmployee[] = [
  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },
  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },
    {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
  ,
  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
  ,
  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
  ,  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
  ,  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
];

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





const EmployeeTable = (props: {handleClickRow: () => void}) => {
  return (
    <div className="px-3">
      <div className="">
        <Breadcrump title="Darbuotojai" navigation={['Žmonių valdymas', 'Darbuotojai']} />
      </div>
      <div className="mt-4">
        <Table
          data={data}
          uniqueCol="Sutarties Nr."
          hide={['Sutarties Nr.']}
          rowsPerPage={10}
          totalPages={10}
          actions={actions}
          handleClickRow={props.handleClickRow}
          onChangePage={(_page: number) => {}}
        />
      </div>
    </div>
  );
}

