import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url="https://60bf32f197295a0017c4212e.mockapi.io/api/v1/employees"
  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get<Data[]>(this.url);
  }

  
}

