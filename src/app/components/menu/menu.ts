import { Component, OnInit, output } from '@angular/core';
import { Router } from '@angular/router';
import MenuItems from './menuItems';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  menuItems = MenuItems.items;


  constructor(private router: Router) {
    console.log('Menu component initialized: '+this.menuItems.length + ' items loaded');
  
  }
  ngOnInit(): void {
    
  }

  logout() {
    //const userService = new UserService(new HttpClient());
    //this.userService.clearUser();
    console.log('User logged out');
    this.router.navigate(['login']);
    // Redirect to login page or perform other actions as needed
  }

  launchOption(item: any) {
    console.log('Launching option:', item.name);
    switch(item.id) {
      case 'dashboard':
        this.router.navigate(['dashboard']);
        break;
      case 'properties_list':
        this.router.navigate(['properties/list']);
        break;
      case 'properties_add':
        this.router.navigate(['properties/create']);
        break;
      case 'properties_separate':
        this.router.navigate(['properties/separate']);
        break;
      case 'settings':
        this.router.navigate(['settings']);
        break;
      case 'create_link':
        this.router.navigate(['links/create']);
      break;
      case 'clients_create':
        this.router.navigate(['clients/create']);
      break;
      case 'clients_list':
        this.router.navigate(['clients/list']);
      break;
      case 'logout':
        this.logout();
        break;
      default:
        console.warn('No action defined for item:', item.id);    
    } 
  }




}
