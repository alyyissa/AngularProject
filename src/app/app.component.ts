import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';
import { Testing2Component } from './testing2/testing2.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DformComponent } from './dform/dform.component';
import { RformComponent } from './rform/rform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RformComponent ,RouterModule, CommonModule, HomeComponent, TestingComponent, Testing2Component, ParentComponentComponent 
    ,DformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
