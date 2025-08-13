import { Component, NgZone, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from './services/user/user';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('safetrack-ang');

  constructor(private router: Router, private userService: UserService, private ngZone: NgZone, private bnIdle: BnNgIdleService) {

  }

  ngOnInit() {
      this.bnIdle.startWatching(300).subscribe((isIdle: boolean) => {
      if (isIdle) {
        console.log('Session expired due to inactivity. Logging out...');
        // Implement your logout logic here, e.g., clear tokens, navigate to login page
        this.router.navigate(['login']); 
      }
    });

    if(this.userService.getUser() === undefined)
    {
      this.router.navigate(['login']);
    }else 
    {
      this.router.navigate(['map']);
    }
  }
}
