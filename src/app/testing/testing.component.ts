import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing',
  imports: [CommonModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  name = "moussa"
  n=1
  isAvailable = false
  user={
    name: "ali issa",
    age: 24,
    work: "unemployed",
  }

  changeValue = () => this.isAvailable = !this.isAvailable;

  color = "red"

  fontSize = 28

  style = {
    "background-color" : 'yellow',
    "border" : '1px solid black',
  }
}
