import { AxiosResponse } from 'axios';

import { customAxios } from '../../plugins/axios';
import { EmployeeDto } from '../../types/services/employees.types';

class EmployeeService {
  public async fetchAll(): Promise<AxiosResponse<EmployeeDto[]>> {
    return await customAxios.get('/employees');
  }

  public async fetchById(id: string): Promise<AxiosResponse<EmployeeDto>> {
    console.log('fethcig');
    return await customAxios.get(`/employees/${id}`);
  }
}

export const employeeService = new EmployeeService();
