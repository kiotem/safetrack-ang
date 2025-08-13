import { Injectable } from '@angular/core';
import User from '../../models/User';
import { API_URL, httpOptions } from '../../../commons/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  user: User | undefined;
  constructor(private http: HttpClient) {
    // UserService initialization if needed
    this.user = undefined; // Initialize user to undefined
  }

  saveUser(user: User){
    if (user && user.objectId) 
    {
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      console.error('Invalid user object');
    }
  }

  getUser(): User | undefined 
  {
    const userJson = sessionStorage.getItem('user');
    console.log('User retrieved from sessionStorage:', userJson);
    if(userJson) 
    {
      this.user = JSON.parse(userJson || '{}') as User;
      return this.user;
    }

    return undefined;
    
  }

  login(data: any) {
    // Implement login logic here
    console.log('Login method called');
    return this.http.post<any>(API_URL+'functions/loginWithVendors', data, httpOptions);
  }
}
