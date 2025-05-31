import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testing2',
  imports: [CommonModule, FormsModule],
  templateUrl: './testing2.component.html',
  styleUrl: './testing2.component.css'
})
export class Testing2Component {
  
  x="";
  y: string = '';
  takeValue(value:any):void{
    this.y = value;
  }
  z = "m2";
  isTrue = true;
  color = "red"
  changeIsTrue = () => this.isTrue = !this.isTrue;
  arr = [1,3,5,6,7,8,9,3,1,34,5]
}
