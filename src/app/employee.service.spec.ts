import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { Data } from '@angular/router';


describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch api data', ()=> {
    const dummyData:Data[]=[{
      id:7,
      name:"Jonathan Kilback",
      age:66,
      salary:95974
    }]

    service.getData().subscribe(data=>{
      expect(data.length).toBe(1);
      expect(data).toEqual(dummyData);
    })

    const req=httpMock.expectOne(service.url)
    expect(req.request.method).toBe('GET')
    req.flush(dummyData)
  })
});
