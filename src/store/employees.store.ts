import { useQuery } from 'react-query';

import { employeeService } from '../services/employees/employee.service';

class EmployeeStore {
  getAll() {
    return useQuery(['employees'], () => employeeService.fetchAll());
  }
  getById(id?: string) {
    return useQuery(['employeeById'], () => employeeService.fetchById(id || ''), {
      enabled: !!id,
    });
  }
}

export const employeeStore = new EmployeeStore();
