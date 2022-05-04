import React from 'react';

import Pagination from '../Molecules/custom/Pagination';

export interface ActionsType<T> {
  name: string;
  handleAction: (_data: T) => void;
}

interface TableProps<T> {
  data: T[];
  uniqueCol: keyof T;
  hide?: (keyof T)[];
  showNumbering?: boolean;
  actions?: ActionsType<T>[];
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
  //   statusColumn,

  //   //pagination
  //   rowsPerPage = 10,
  totalPages = 1,
  currentPage = 0,
  onChangePage,
}: //   onChangePageSize,
TableProps<T>) {
  return (
    <div className="border rounded">
      <table className="table table-responsive my-0">
        <tbody>
          <tr className="rounded bg-light">
            {showNumbering && <th>#</th>}
            {Object.keys(data[0])
              .filter((key) => !hide.includes(key as keyof T))
              .map((key) => (
                <td key={key} className="text-capitalize font-bold px-2">
                  {key}
                </td>
              ))}
            {actions && <th>Actions</th>}
          </tr>
          {/* Table body */}
          {data.map((row, index) => (
            <tr key={index} onClick={() => handleClickRow && handleClickRow()}>
              {showNumbering && <td>{index + 1}</td>}
              {Object.keys(row)
                .filter((key) => !hide.includes(key as keyof T))
                .map((key) => (
                  <td key={key} className="text-sm px-2">
                    {/* @ts-ignore */}
                    {row[key]}
                  </td>
                ))}
              {actions && (
                <td>
                  {actions.map((action) => (
                    <div key={action.name}>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => action.handleAction(row)}>
                        {action.name}
                      </button>
                    </div>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4 mb-5">
        <div className="flex items-center py-2">
          <span>Show</span>

          {/* <Select
            className="px-3"
            width="32"
            // height={30}
            value={rowsPerPage.toString()}
            handleChange={handleCountSelect}
            name="rowstoDisplay"
            options={countsToDisplay}></Select>
          <span>Entries</span> */}
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
