import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HomeComponent, ProductListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eccom-app';
}
