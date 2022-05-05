import React from 'react';
import Select from 'react-select';
import '../../styles/components/Organisms/Table.scss';
import { ValueType } from '../../types';
import { TableActionsType } from '../../types/props';
import Dropdown from '../Atoms/custom/Dropdown';
import Icon from '../Atoms/Icon';
import Button from '../Molecules/Button/Button';
import Pagination from '../Molecules/custom/Pagination';

const showEntriesOptions = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
];

interface TableProps<T> {
  data: T[];
  uniqueCol: keyof T;
  hide?: (keyof T)[];
  showNumbering?: boolean;
  actions?: TableActionsType<T>[];
  handleClickRow?: () => void;
  statusColumn?: string;

  //pagination
  rowsPerPage?: number;
  totalPages?: number;
  currentPage?: number;
  onChangePage: (_page: number) => void;
  onChangePageSize?: (_size: number) => void;
}

export default function Table<T>({
  data,
  //   uniqueCol,
  hide = [],
  showNumbering = true,
  actions,
  handleClickRow,

  //pagination
  rowsPerPage = 10,
  totalPages = 1,
  currentPage = 0,
  onChangePage,
  onChangePageSize,
}: //   ,
TableProps<T>) {
  function handleCountSelect(e: ValueType) {
    if (onChangePageSize) onChangePageSize(parseInt(e.value + ''));
  }

  return (
    <div>
      <div className="border rounded">
      <table className="table table-responsive my-0">
        <tbody>
          <tr className="rounded bg-light">
            {showNumbering && <th>#</th>}
            {Object.keys(data[0])
              .filter((key) => !hide.includes(key as keyof T))
              .map((key) => (
                <td key={key} className="text-capitalize font-bold px-2 text-sm">
                  {key}
                </td>
              ))}
            {actions && <th className="text-center text-xs">Red.</th>}
          </tr>
          {/* Table body */}
          {data.map((row, index) => (
            <tr key={index} onClick={() => handleClickRow && handleClickRow()}>
              {showNumbering && <td className="text-xs">{index + 1}</td>}
              {Object.keys(row)
                .filter((key) => !hide.includes(key as keyof T))
                .map((key) => (
                  <td key={key} className="text-xs px-2">
                    {/* @ts-ignore */}
                    {row[key]}
                  </td>
                ))}
              {actions && (
                <td className="" >
                  <Dropdown
                    header={
                      <Button className="no-styles" children={<Icon name={'more'} size={24} styles={{marginTop: '-9px'}} /> }></Button>
                    }>
                    {actions.map((action) => (
                      <div key={action.name} className="w-100 bg-white shadow p-0">
                        <button
                          className="btn col-3 w-100 border-bottom drop-content-btn text-capitalize p-0"
                          onClick={() => action.handleAction(row)}>
                          {/* <Icon name={action.icon} size={13} /> */}
                          <span className="px-2 text-xs">
                            {action.name.toLowerCase()}
                          </span>
                        </button>
                      </div>
                    ))}
                  </Dropdown>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className=" my-2">
        <div className="d-flex align-items-center py-2">
          <span className="px-3 text-xs">Rodyti</span>
          <Select
          className='text-xs'
            name="rowstoDisplay"
            value={showEntriesOptions.find((option) => option.value === rowsPerPage + '')}
            // @ts-ignore
            onChange={handleCountSelect}
            options={showEntriesOptions}
          />
        </div>
        <Pagination
          totalElements={data.length}
          paginate={onChangePage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
    
  );
}
