import React, { useState } from 'react';

import { SelectData, ValueType } from '../../../types';
import { filterType, IFilterType } from '../../../types/props';
import Input from '../../Atoms/Form/Input';
import CustomSelect from '../../Atoms/Form/Select';
import Icon from '../../Atoms/Icon';
import Button from '../Button/Button';
interface IProps<T> {
  data?: T;
  handleFilter: (_column: keyof T, _filterType: filterType, _filter: string) => void;
}

const filterOperations: SelectData[] = [
  { value: 'equals', label: 'Equals' },
  { value: 'startsWith', label: 'Starts with' },
  { value: 'endsWith', label: 'Ends with' },
  { value: 'contains', label: 'Contains' },
  { value: 'lessThan', label: 'Less than' },
  { value: 'greaterThan', label: 'Greater than' },
];

export default function Filter<T>({ data, handleFilter }: IProps<T>) {
  const [filter, setfilter] = useState<IFilterType<T>>({
    // @ts-ignore
    column: '',
    filterType: 'equals',
    filter: '',
  });

  const handleChange = (e: ValueType) => {
    setfilter((filter) => ({
      ...filter,
      [e.name]: e.value,
    }));
  };

  const colOptions = React.useMemo(() => {
    if (data) {
      return Object.keys(data).map((key) => ({
        value: key,
        label: key,
      })) as SelectData[];
    } else return [];
  }, [data]);

  const handleFilterClick = () => {
    handleFilter(filter.column, filter.filterType, filter.filter);
  };

  return (
    <div className="py-4">
      <div className="d-block">
        <div className="col-4 col-md-3 col-lg-2 d-flex align-items-center justify-content-between bg-white py-2 px-3">
          <span className="pr-5 text-xs">Filtras</span>
          <Icon name="filter" size={20} />
        </div>
        <div className="col-12 col-md-10 col-lg-8">
          <div className="border row p-2 ">
            <div className="col-3">
              <CustomSelect
                name="column"
                placeholder="Column"
                handleChange={handleChange}
                className="text-xs"
                options={colOptions}
              />
            </div>
            <div className="col-3">
              <CustomSelect
                placeholder="Filter"
                handleChange={handleChange}
                name="filterType"
                className="text-xs"
                options={filterOperations}
              />
            </div>
            <div className="col-4">
              <Input
                handleChange={handleChange}
                name="filter"
                value={filter.filter}
                placeholder="Type here"
              />
            </div>
            <div className="col-2">
              <Button onClick={handleFilterClick}>Apply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
