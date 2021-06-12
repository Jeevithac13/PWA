import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }
flag:any=false;
  ngOnInit(): void {
  }

  onClick(){
    setTimeout(() =>{
      var a = document.getElementsByClassName("btn")[0];
     // a.disabled=false;
     this.flag=true;
    },5000);
    //this.flag=true;
    //this.flag=false

  }

}
