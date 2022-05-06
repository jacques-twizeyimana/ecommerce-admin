import { INationality } from "./nationalities.types";

export interface EmployeeDto {
    accomodations: any[];
    address: string;
    bankAccountNumber: string;
    bankCode: string;
    city: string;
    clothings: {id: string, size: string, type: {id: number, name: string}}[];
    contractNumber: string;
    country: string;
    drivingLicense: {id: string, name: string};
    email: string;
    employeeRole: {id: string, name: string};
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
    startDate: Date;
    timesheets: any[];
    workActions: any[];
    workingWeek: any;
    firstName: string;
    lastName: string;
    seqNumber: string; 
  }
  


  export interface EmployeeTableDto {
    address: string;
    email: string;
    id: string;
    isActive?: boolean;
    phone: string;
    // firstName: string;
    // lastName: string;
    name: string;
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