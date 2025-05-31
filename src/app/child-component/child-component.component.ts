import { Component, Input, Output, EventEmitter } from '@angular/core';
import { emit } from 'node:process';
import { Router } from '@angular/router';
@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  
  constructor(private route: Router){

  }

  @Input() person:any;
  @Output() sendId = new EventEmitter();

  send(){
    this.sendId.emit(" hi "+ this.person.name)
  }

  moveTo(id:any){
    this.route.navigate(['/link1',id])
  }

}