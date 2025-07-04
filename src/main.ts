import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideTranslation } from './app/translate.setup';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...appConfig.providers!, provideTranslation()],
}).catch((err) => console.error(err));
