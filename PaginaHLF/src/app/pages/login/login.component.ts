import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: any;
  onSubmit() {
    // Add your form submission logic here
    console.log('Form submitted');
  }
}
