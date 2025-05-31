import { Component } from '@angular/core';
import { FormBuilder ,FormControl , FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-rform',
  imports: [ReactiveFormsModule],
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent {



userform = new FormGroup({
  name: new FormControl(''),
  password: new FormControl(''),
  email: new FormControl('')
})

userInfo!: FormGroup;

constructor(private lol:FormBuilder){
  this.userInfo = this.lol.group({
  name:[''],
  password:[''],
  email:[''],
  address:this.lol.group({
    city:[''],
    zipCode:[''],
  })
})}

submit(){
  console.log(this.userInfo.value);
}
}

