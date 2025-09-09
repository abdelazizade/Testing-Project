import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FetchDateInterceptor } from './services/interceptors/fetch-date';
import { FetchDataClass } from './services/fetch-data/fetch-data';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com/'},
    {provide: 'API_SERVICE', useClass: FetchDataClass},
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptors([FetchDateInterceptor])),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
  ],
};
