import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products=[
  {id:'1', name:"product1", price:'35', image:"product1.jpg", category:'3'},
  {id:'2', name:"product2", price:'25', image:"product2.jpg", category:'3'},
  {id:'3', name:"product3", price:'15', image:"product3.jpg", category:'3'},
  {id:'4', name:"product4", price:'10', image:"product4.jpg", category:'3'},
  {id:'5', name:"product5", price:'55', image:"product5.jpg", category:'3'},
  {id:'6', name:"product6", price:'40', image:"product6.jpg", category:'3'},
  {id:'7', name:"product7", price:'35', image:"product7.jpg", category:'3'},
  {id:'8', name:"product8", price:'23', image:"product8.jpg", category:'2'},
  {id:'9', name:"product9", price:'35', image:"product9.jpg", category:'2'},
  {id:'10', name:"product10", price:'10', image:"product10.jpg", category:'2'},
]

constructor() { }

getProduct(){
  return this.products;
}
}
