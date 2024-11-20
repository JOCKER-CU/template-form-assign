import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  user = {
    username: '',
    email: '',
    gender: '',
    phoneNo: '',
    dateOfBirth: '',
    course: ''
  };

  courses = ['Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'Biography'];


  onSubmit() {
    console.log(this.user);
  }
}
