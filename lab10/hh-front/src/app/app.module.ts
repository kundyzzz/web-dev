import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
  ]
}).catch(err => console.error(err));
