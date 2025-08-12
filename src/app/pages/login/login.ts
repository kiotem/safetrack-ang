import { ChangeDetectorRef, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { tooglePasswordVisibility } from '../../../commons/controls';
import { LoaderService } from '../../services/commons/loader';
import { Loader } from '../../components/loader/loader';
import { UserService } from '../../services/user/user';
import { VerificationCode } from '../../components/verification-code/verification-code';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Loader, VerificationCode],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  // Define form controls and methods for login functionality here
  tempUser: any;
  loginForm : FormGroup;
  username: FormControl;
  password: FormControl;

  launchVerificationCode: boolean;

  @ViewChild(VerificationCode) verificationCodeChild: VerificationCode | undefined;


  constructor(private renderer: Renderer2, private loaderService: LoaderService, private userService: UserService, private cdr: ChangeDetectorRef) 
  {
    this.launchVerificationCode = false; // Initialize the flag for verification code component
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

    sessionStorage.removeItem('selectedVendor');
    sessionStorage.removeItem('tempUser');  
    sessionStorage.removeItem('vendorsList');
    sessionStorage.removeItem('user');  
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
        this.handleSubmit();
      }
      return;
      }
    }
  }

  handleSubmit() {
    // Handle form submission logic here
    if(this.loginForm.valid) {
      this.loaderService.show();

      const loginData = this.loginForm.value;

      this.userService.login(loginData).subscribe({
        next: (response) => {
          //console.log('Login successful', response);
          
          this.tempUser = response.result.user;
          sessionStorage.setItem('tempUser', JSON.stringify(this.tempUser));
          //console.log('Temporary user data:', this.tempUser);

          //console.log('Vendors list:', response.result.vendorsList);

          sessionStorage.setItem('vendorsList', JSON.stringify(response.result.vendorsList));

          this.loaderService.hide();

          const verificationCodeComponent = document.getElementById('verification-component');
          if (verificationCodeComponent) 
          {
            verificationCodeComponent.style.display = 'block';
          }

          if(this.verificationCodeChild)
          {
              this.verificationCodeChild.sendVerificationCode({ user: this.tempUser });
          }
              
            const i_0 = document.getElementById('i_0') as HTMLInputElement;
            if (i_0) {
              i_0.focus();
            }
          this.cdr.detectChanges(); // Trigger change detection to update the view
          
          },
        error: (error) => {
          this.loaderService.hide();
          console.error('Login failed', error);
          alert('¡Datos incorrectos!');
          this.loginForm.reset();
          this.renderer.selectRootElement('#i_username').focus();

        }
      });
    }
  }
  
}
