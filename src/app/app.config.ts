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

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com/'},
    // {},
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptors([FetchDateInterceptor])),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
  ],
};
