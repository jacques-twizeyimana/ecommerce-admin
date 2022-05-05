import React from 'react';

import Breadcrump from '../../components/Molecules/Breadcrump';
import { Tab, Tabs } from '../../components/Molecules/custom/Tabs';
import EmployeeInfo from '../../components/Organisms/employees/EmployeeInfo';

export default function EmployeeDetails() {
  return (
    <div className="px-3">
      <Breadcrump
        title="Jonas Jonaitis"
        navigation={['Žmonių valdymas', 'Darbuotojai', 'Jonas Jonaitis']}
      />
      <Tabs className="mt-5">
        <Tab label="DARBUOTOJO DUOMENYS">
          <EmployeeInfo />
        </Tab>
        <Tab label="DARBO PRIEMONĖS">
          <h2 className="text-3xl text-green-400">DARBO PRIEMONĖS</h2>
        </Tab>
        <Tab label="ISTORIJA">
          <h2 className="text-3xl text-yellow-300 font-bold">ISTORIJA</h2>
        </Tab>
        <Tab label="DOKUMENTAI">
          <h2 className="text-3xl text-green-400">DOKUMENTAI</h2>
        </Tab>
        <Tab label="FORMŲ GENERAVIMAS">
          <h2 className="text-3xl text-yellow-300 font-bold">FORMŲ GENERAVIMAS</h2>
        </Tab>
      </Tabs>
    </div>
  );
}
