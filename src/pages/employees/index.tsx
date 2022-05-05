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

export default function Employees() {
    return (
        <div>
            <MainLayout  children={<EmployeeTable/>}/>
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
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
];

const actions: TableActionsType<IEmployee>[] = [
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

const EmployeeTable = () => {
  return (
    <div className="px-3">
      <div className="">
        <Breadcrump title="Darbuotojai" navigation={['Žmonių valdymas', 'Darbuotojai']} />
      </div>
      <div className="mt-5">
        <Table
          data={data}
          uniqueCol="Sutarties Nr."
          hide={['Sutarties Nr.']}
          rowsPerPage={10}
          totalPages={10}
          actions={actions}
          onChangePage={(_page: number) => {}}
        />
      </div>
    </div>
  );
}

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