import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { tooglePasswordVisibility } from '../../../commons/controls';
import { LoaderService } from '../../services/commons/loader';
import { Loader } from '../../components/loader/loader';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Loader],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  // Define form controls and methods for login functionality here

  loginForm : FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private renderer: Renderer2, private loaderService: LoaderService) 
  {
    // Initialize form controls or services if needed
    this.username = new FormControl('');
    this.password = new FormControl('');
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
    // Initialization logic for the login component
    console.log('Login component initialized');
    this.loaderService.show(); // Show loader on initialization
    setTimeout(() => {
      this.loaderService.hide(); // Hide loader after a delay (e.g., after 2 seconds)
    }, 2000);
    
  }

  onLogin() {
    // Logic to handle user login
  }

  tooglePassword(): void
  {
    const passwordInput = document.getElementById('i_password') as HTMLInputElement;
    tooglePasswordVisibility(passwordInput)    
  }

  onKeydown(event: KeyboardEvent): void 
  {
    const divMessage = document.getElementById('div_message');
    if (divMessage) 
    {
      divMessage.style.display = 'none';
    }
    if (event.key === 'Enter') 
    {
      if(this.password.value === '') {
        console.log('Password is required');
        this.renderer.selectRootElement('#i_password').focus();
      }else
      {
        if(this.loginForm.valid) {
        //this.handleSubmit();
      }
      return;
      }
    }
  }

  handleSubmit() {
    /*
    if (this.loginForm.valid) 
      {
      console.log('Form submitted', this.loginForm.value);

      const pLoader = document.getElementById('p_loader');
      const buttonLogin = document.getElementById('bt_login');
      if (pLoader) {
        pLoader.style.display = 'block';
      }

      if (buttonLogin) {
        buttonLogin.style.display = 'none';
      }

      this.isLoading = true; // Set loading state
      const loginData = this.loginForm.value;
      
      this.userService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.isLoading = false;



          this.userService.saveUser(response);

          // Navigate to the home page or another page after successful login
          //this.router.navigate(['/dashboard']);
          //this.downloadProjects();
        },
        error: (error) => {
          console.error('Login failed', error);
          console.log('Login failed error', error.error.code);

          this.isLoading = false; // Reset loading state

          const pLoader = document.getElementById('p_loader');
          if (pLoader) {
            pLoader.style.display = 'none';
          }
          const buttonLogin = document.getElementById('bt_login');
          if (buttonLogin) {
            buttonLogin.style.display = 'block';
          }

          if(error.error.code == '101')
          {
            const divMessage = document.getElementById('div_message');
            if (divMessage) {
              divMessage.style.display = 'block';
              divMessage.innerHTML = 'Datos incorrectos';
            }
          }
          // Handle login error, e.g., show an error message
        }
      });
    }else{
      console.log('Form is invalid');
    }*/
  }
  
}
