import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import Parse from 'parse';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

/*
Parse.initialize('qXvO3F6Xh4GB5uUtgOkq7ZgNrOFcAbTetBycIMiL', 'j7ospkJUFKvVzfHErJ5dGCJrhhnC42XYT38n1gm1');
Parse.serverURL = 'https://promotorafull.b4a.io'; // Use wss for secure WebSocket
*/

// Set up Parse LiveQuery client
/*
const liveQueryClient = new LiveQueryClient({
  applicationId: 'NDIFx8hdu3ZLZbB6tUq3au06HmqrhuKkEZ72EVwR',
  serverURL: 'wss://safetrack.ws:8080/parse/', // Use wss for secure WebSocket
  javascriptKey: '1MoUVm7jZKt9RR1t1THGN64LQOI7GUu5gvTnQlwZ',
});

liveQueryClient.open();
Parse.LiveQuery.client = liveQueryClient*/