import React from 'react';

import Heading from '../../components/Atoms/Heading';
import Breadcrump from '../../components/Molecules/Breadcrump';
import Table from '../../components/Organisms/Table';

const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@email.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john1@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john4@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john1@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john4@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john1@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john4@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john1@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john4@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
];

export default function ShowCase() {
  return (
    <div className="p-5">
      <Heading fontSize="xl" fontWeight="bold">
        Heading
      </Heading>
      <div className="py-2">
        <Breadcrump title="Darbuotojai" navigation={['Žmonių valdymas', 'Darbuotojai']} />
      </div>
      <Table data={data} uniqueCol="id" hide={['id']} />
    </div>
  );
}
