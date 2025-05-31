import { Component } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponentComponent, CommonModule],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {

  
  arr = [
    {id:1, name: "hassan", age:25},
    {id:2, name: "ali", age: 24},
    {id:3, name: "mhmd", age: 22},
    {id:4, name: "issa", age: 21},

  ]

  accessData(value: any){

    console.log("from Parent"+ value)
    
  }
}
