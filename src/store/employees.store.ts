import { useMutation, useQuery } from 'react-query';

import { employeeService } from '../services/employees/employee.service';
import { EmployeeDto } from '../types/services/employees.types';

class EmployeeStore {
  getAll() {
    return useQuery(['employees'], () => 
    employeeService.fetchAll()
    )
  }
  getById(id: string) {
    return useQuery(['employeeById'], () => 
      employeeService.fetchById(id)
    );
  }
}

export const employeeStore = new EmployeeStore();