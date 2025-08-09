import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, httpOptions } from '../../../commons/enviroments';

@Injectable({
  providedIn: 'root'
})
export class VerificationCodeService {
  verificationCode: string = '';

  constructor(private http: HttpClient) {
    // Initialization logic if needed
  }
  
  sendVerificationCode(data: any) 
  {
    console.log('Sending verification code:', data);
    let urlVerificationCode = 'https://safetrack.live/php/send_auth_code_ang.php';
    return this.http.post<any>(urlVerificationCode, data);
    // Here you would typically make an HTTP request to send the code
  }


}
