import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SectionComponent } from './section/section.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    importProvidersFrom(
      FormlyModule.forRoot({
        wrappers: [{ name: 'section', component: SectionComponent }],
      })
    ),
  ],
};
