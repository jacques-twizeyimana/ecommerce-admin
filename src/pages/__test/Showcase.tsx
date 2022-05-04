import React from 'react';

import Heading from '../../components/Atoms/Heading';
import Breadcrump from '../../components/Molecules/Breadcrump';

export default function ShowCase() {
  return (
    <div className="p-5">
      <Heading fontSize="xl" fontWeight="bold">
        Heading
      </Heading>
      <div className="py-2">
        <Breadcrump title="Darbuotojai" navigation={['Žmonių valdymas', 'Darbuotojai']} />
      </div>
    </div>
  );
}
