import { AxiosResponse } from 'axios';

import { customAxios } from '../../plugins/axios';
import {
  ForgotPasswordInfo,
  IChangePassword,
  IResetPassword,
  LoginDto,
  LoginRes,
} from '../../types/services/auth.types';
import { EmployeeDto, IEmployee } from '../../types/services/employees.types';

class EmployeeService {
  public async fetchAll(): Promise<AxiosResponse<EmployeeDto>> {
    return await customAxios.get('/employees');
  }

  public async fetchById(id: string): Promise<AxiosResponse<any>> {
      return await customAxios.get(`/employees/${id}`);
  }
}

export const employeeService = new EmployeeService();



const data: IEmployee[] = [
  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },
  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },
    {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
  ,
  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
  ,
  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  },  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
  ,  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
  ,  {
    'Sutarties Nr.': 1,
    'Grafiko Nr.': 'John Doe',
    'Vardas Pavardė': 'john@email.com',
    'Pareigos': '+1 (123) 456-7890',
    'Statusas': '123 Main St, Anytown, CA 12345'
  }
];
