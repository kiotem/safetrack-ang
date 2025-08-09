import { Injectable } from '@angular/core';
import User from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
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
}
