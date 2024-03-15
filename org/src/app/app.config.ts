import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { appRoutes } from './app.routes';
import { SectionComponent } from './section/section.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    importProvidersFrom(
      FormlyMaterialModule,
      FormlyModule.forRoot({
        types: [{ name: `section`, component: SectionComponent }],
      }),
    ),
  ],
};
