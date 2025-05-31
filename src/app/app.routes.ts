import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Testing2Component } from './testing2/testing2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestLinkComponent } from './test-link/test-link.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DformComponent } from './dform/dform.component';
export const routes: Routes = [
    {path:"",redirectTo:"/home", pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"link1/:id",component:TestLinkComponent},
    {path:"about-us",component:Testing2Component},
    {path:"parent",component:ParentComponentComponent},
    {path:"**",component:NotFoundComponent},
    {path:"form", component:DformComponent}
];
