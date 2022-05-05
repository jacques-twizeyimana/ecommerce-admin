import React from 'react';
import Select from 'react-select';

import Icon from '../../Atoms/Icon';

export default function Filter() {
  return (
    <div className="py-4">
      <div className="d-inline-block">
        <div className="d-flex align-items-center bg-white py-2 px-3">
          <span className="pr-5">Filtras</span>
          <Icon name="add" size={28} />
        </div>
        <div className="border w-100 p-2 d-flex align-items-center gap-2">
          <Select name="filter" options={[]} />
          <Select name="filter" options={[]} />
          <Select name="filter" options={[]} />
        </div>
      </div>
    </div>
  );
}
