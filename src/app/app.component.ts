import { Component } from '@angular/core';
import { from } from 'rxjs';
import { EmployeeService } from './employee.service';
import { map, reduce, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwademo';
  sal: any;


  constructor(private service: EmployeeService) { }
  empdata: any;
  hike: any;
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.empdata = data;
      from(data).pipe(
        map((data: any) => data.age),
        reduce((acc, data) => acc += data / 20, 0)
      ).subscribe(data => {
        console.log("Avg age " + data)
      });

      from(data).pipe(
        map((data: any) => data.salary),
        reduce((acc, data) => acc += data / 20, 0)
      ).subscribe(data => {
        console.log("Avg salary " + data)
      });

      from(data).pipe(
        reduce((acc, data: any) => (acc += data.salary), 0))
        .subscribe(data => {
          console.log("Total salary " + data)
        });

      this.hike = this.empdata.map((data: any) => {
        return data.salary * 10 / 100
      });
      console.log(this.hike);


    })

  }

  onClick(value: any) {
    console.log(value);
    this.sal = this.empdata.filter((data: any) => {
      return data.salary > value
    })
    console.log(this.sal);
  }



}
