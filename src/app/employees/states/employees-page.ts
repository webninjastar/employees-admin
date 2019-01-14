import { Employee } from '../models/employee';
export interface EmployeesPage {
    loading: boolean;
    employees: Employee[];
    formStatus: string;

    totalEmployees: number;
    totalDrivers: number;
    totalRosarioEmployees: number;
}