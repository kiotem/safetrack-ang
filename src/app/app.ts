import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from './services/user/user';
import { SelectVendor } from './components/select-vendor/select-vendor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('safetrack-ang');

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    
    if(this.userService.getUser() === null)
    {
      this.router.navigate(['login']);
    }else 
    {
      this.router.navigate(['map']);
    }
   //this.router.navigate(['map']);
  }
}
