import React from 'react';
import Select from 'react-select';

import Icon from '../../Atoms/Icon';

export default function Filter() {
  return (
    <div className="py-4">
      <div className="d-inline-block">
        <div className="col-5 d-flex align-items-center justify-content-between bg-white py-2 px-3">
          <span className="pr-5 text-xs">Filtras</span>
          <Icon name="filter" size={20} />
        </div>
        <div className="border w-100 p-2 d-flex align-items-center gap-2">
         <div className="col-5">
            <Select name="filter" className="text-xs" options={[]} />
         </div>
         <div className="col-5">
            <Select name="filter" className="text-xs" options={[]} />
         </div>
        </div>
      </div>
    </div>
  );
}
