import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dform',
  imports: [FormsModule],
  templateUrl: './dform.component.html',
  styleUrl: './dform.component.css'
})
export class DformComponent {
  user = {
    name:'',
    email:' '
  }

  submitForm(form:any){
    if(form.valid){
    console.log(form.value);
    }
  }
}
