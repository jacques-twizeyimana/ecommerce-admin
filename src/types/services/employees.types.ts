import { INationality } from "./nationalities.types";

export interface EmployeeDto {
    accomodations: any[];
    address: string;
    bankAccountNumber: string;
    bankCode: string;
    city: string;
    clothings: any[];
    contractNumber: string;
    country: string;
    drivingLicense: any;
    email: string;
    employeeRole: any[];
    employmentTerm: any;
    employmentType: any;
    endDate: string;
    equipments: any[];
    id: string;
    inactivatedDate: string | null;
    isActive: boolean;
    nationality: INationality;
    otherInfo: string;
    personalIdentificationNumber: string;
    phone: string;
    postalCode: string;
    profileUrl: string | null;
    regDate: string;
    salary: number;
    socialSecurityNumber: string;
    startDate: string;
    timesheets: any[];
    workActions: any[];
    workingWeek: any;
    firstName: string;
    lastName: string;
    seqNumber: string;
    
  }
  
  export interface LoginRes {
    token: string;
    expiration: number;
  }
  
  export interface ForgotPasswordInfo {
    username: string;
  }
  
  export interface IChangePassword {
    username: string;
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }
  
  export interface IResetPassword {
    username: string;
    newPassword: string;
    confirmNewPassword: string;
    token: string;
  }
  

  export interface IEmployee {
    'Sutarties Nr.': number;
    'Grafiko Nr.': string;
    'Vardas Pavardė': string;
    'Pareigos': string;
    'Statusas': string;
  }