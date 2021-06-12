import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
name="user"
  constructor() { }

  ngOnInit(): void {
  }

  add(a:any,b:any)
{
  return a+b;
}
}
