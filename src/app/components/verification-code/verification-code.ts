import { Component, OnInit } from '@angular/core';
import { VerificationCodeService } from '../../services/commons/verification-code';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  imports: [],
  templateUrl: './verification-code.html',
  styleUrl: './verification-code.css'
})
export class VerificationCode implements OnInit{
  codeSent: string = '';
  codeTyped: string;

  constructor(public verificationCodeService: VerificationCodeService, public router: Router) {
    this.codeSent = '-';
    this.codeTyped = '';
  }
  ngOnInit(): void {
    
  }

  onKeyUp(event: KeyboardEvent, index: number): void {
    if(event.key == 'Backspace') 
    {
      const previousInput = document.getElementById(`i_${index - 1}`) as HTMLInputElement;
      if (previousInput) {
        previousInput.focus(); // Move focus to the previous input
      }
      return;
    }else  
    {
      const input = event.target as HTMLInputElement;
      const value = input.value;  
      if (value.length > 1) {
        input.value = value.slice(0, 1); // Ensure only one character is entered
      }
      if (index < 5) {
        const nextInput = document.getElementById(`i_${index + 1}`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus(); // Move focus to the next input
        }
      }else{
        this.checkCode();
      }
    }
  }
  

  sendVerificationCode(data: { user: any }) {
    console.log('Sending verification code for user:', data.user);

    let data2 = {
      email: 'joalcasi@gmail.com',
      name: 'Jorge C'
    };

    this.verificationCodeService.sendVerificationCode(data2)
      .subscribe({
        next: (response) => {
          console.log('Verification code sent successfully:', response);
          if(response.success) {
            console.log('Verification code sent successfully');
            this.codeSent = response.verification_code; // Assuming the response contains the verification code
            console.log('Verification code Sent:', this.codeSent);
          }
        },
        error: (error) => {   
          console.error('Error sending verification code:', error);
          alert('Error al enviar el código de verificación');
        }
      });
  }

  checkCode()
  {
    this.codeTyped = 
    Array.from({ length: 6 }, (_, i) => 
    (document.getElementById(`i_${i}`) as HTMLInputElement).value
    ).join('');
    console.log('Final verification code:', this.codeTyped);

    if(this.codeTyped == this.codeSent) 
    {
      console.log('Verification code is correct');
      this.goMap();
    }else 
    {
      console.log('Verification code is incorrect');
      alert('Código incorrecto');
      this.codeTyped = ''; 

      for(let i = 0; i < 6; i++) 
      {
        const input = document.getElementById(`i_${i}`) as HTMLInputElement;
        if(input) 
        {
          input.value = ''; // Clear each input field
        }
      }
      const firstInput = document.getElementById('i_0') as HTMLInputElement;
      if (firstInput) {
        firstInput.focus(); // Move focus back to the first input
      }
    }
  }

  goMap()
  {
    let tempUser = sessionStorage.getItem('tempUser');
    if(tempUser)
    {
      //tempUser = JSON.parse(tempUser);
      //console.log('Temporary user data:', tempUser);
      
      sessionStorage.setItem('user', tempUser);
      sessionStorage.removeItem('tempUser');

      let temp = sessionStorage.getItem('user');
      console.log('User data saved to sessionStorage:', temp);

      this.router.navigate(['/map']);
    } 
    
  }
}
