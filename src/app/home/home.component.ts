import { Component } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CategoryCardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
category =[
  {id:1, name:"t-shirt", image:"categ1.png"},
  {id:2, name:"t-shirt", image:"categ2.png"},
  {id:3, name:"t-shirt", image:"categ3.png"},
  {id:4, name:"t-shirt", image:"categ4.png"},
]
}
