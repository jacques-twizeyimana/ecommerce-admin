import { useQuery } from 'react-query';

import { employmentTypeService } from '../services/employees/employment-types.service';

class WorkingWeek {
  getAll() {
    return useQuery(['working-weeks'], () => employmentTypeService.getAll());
  }
  getById(id?: string) {
    return useQuery(
      ['working-weeks', id],
      () => employmentTypeService.getById(id || ''),
      {
        enabled: !!id,
      },
    );
  }
}

export const workingWeekStore = new WorkingWeek();
