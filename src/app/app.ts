import { Component, NgZone, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from './services/user/user';
import { StorageService } from './services/storage-service';
import { BnNgIdleService } from 'bn-ng-idle';
//import Parse from 'parse';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App implements OnInit {
  
  protected readonly title = signal('safetrack-ang');
  //private liveQuerySubscription: Parse.LiveQuerySubscription | undefined;


  constructor(private router: Router, private userService: UserService, private ngZone: NgZone, public storageService: StorageService, private bnIdle: BnNgIdleService) {
//this.subscribeToLiveQuery();
  }

  ngOnInit() {

    let user_text = this.storageService.getItem('user');
    console.log('User from storage:', user_text);


    if(!user_text)
    {
      this.router.navigate(['login']);
    }else 
    {
      this.router.navigate(['map']);
    }
      
    this.bnIdle.startWatching(300).subscribe((isIdle: boolean) => {
      if (isIdle) 
      {
        console.log('Session expired due to inactivity. Logging out...');
        // Implement your logout logic here, e.g., clear tokens, navigate to login page
        this.router.navigate(['login']); 
      }
    });
  }

  ngOnDestroy(): void 
  {
    /*
    if (this.liveQuerySubscription) {
      this.liveQuerySubscription.unsubscribe(); // Unsubscribe from Parse LiveQuery on component destruction
    }
    */
  }


  /*
  private async subscribeToLiveQuery(): Promise<void> {
    const query = new Parse.Query('Event'); // Replace 'MyClass' with your Parse Class name
    const subscription = await query.subscribe();

    this.liveQuerySubscription = subscription; // Store the subscription

    subscription.on('create', (object: Parse.Object) => {
      this.ngZone.run(() => {
        console.log('New object created:', object);
        //this.items.push(object.toJSON());
      });
    });

    subscription.on('update', (object: Parse.Object) => {
      this.ngZone.run(() => {

      });
    });
    

    // Handle other events like 'delete', 'enter', 'leave' similarly
  }*/
    
}
