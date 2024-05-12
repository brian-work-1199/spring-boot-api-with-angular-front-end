import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/all`);
  }

  public findEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServiceUrl}/employee/find/${id}`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${this.apiServiceUrl}/employee/add`,
      employee
    );
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.apiServiceUrl}/employee/update`,
      employee
    );
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServiceUrl}/employee/delete/${id}`
    );
  }
}
