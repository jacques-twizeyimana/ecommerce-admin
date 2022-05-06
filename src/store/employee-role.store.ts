import { useMutation, useQuery } from 'react-query';

import { employeeRolesService } from '../services/employees/employee-roles.service';

class EmployeeStore {
  create() {
    return useMutation(employeeRolesService.createRole);
  }
  getAll() {
    return useQuery(['employees-roles'], () => employeeRolesService.getAll());
  }
  getById(id?: string) {
    return useQuery(
      ['employee-roles', id],
      () => employeeRolesService.getById(id || ''),
      {
        enabled: !!id,
      },
    );
  }
}

export const employeeStore = new EmployeeStore();
