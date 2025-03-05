export interface Employee {
  id: number;
  name: string;
  job: "Back-end" | "Front-end" | "Designer";
  admission_date: string;
  phone: string;
  image: string;
};

export interface EmployeesDataResponse {
  employees: Employee[];
};