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

  getUser(): User | null {
    const userJson = sessionStorage.getItem('user');
    if (userJson) {
      try {
        return JSON.parse(userJson) as User;
      }catch (error) {
        console.error('Error parsing user from sessionStorage:', error);
        return null;
      }
    }
    return null;
  }

  login(data: any) {
    // Implement login logic here
    console.log('Login method called');
    return this.http.post<any>(API_URL+'functions/loginWithVendors', data, httpOptions);
  }
}
