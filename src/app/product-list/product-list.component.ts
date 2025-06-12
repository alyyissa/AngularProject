import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
category =[
  {id:1, name:"t-shirt", image:"categ1.png"},
  {id:2, name:"t-shirt", image:"categ2.png"},
  {id:3, name:"t-shirt", image:"categ3.png"},
  {id:4, name:"t-shirt", image:"categ4.png"},
]
products:any[]=[];

constructor(public productServices: ProductService){}

ngOnInit(): void {
  this.products = this.productServices.getProduct();
}
}
