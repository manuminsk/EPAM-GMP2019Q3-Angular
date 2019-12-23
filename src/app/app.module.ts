import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSpinner } from '@angular/material';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './modules/core/services/auth.interceptor';
import { reducers, metaReducers } from './store';
import { environment } from '../environments/environment';
import { APP_EFFECTS } from './store/effects/app.effects';
import { LoaderComponent } from './modules/core/components/loader/loader.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(APP_EFFECTS)
  ],
  entryComponents: [MatSpinner, LoaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
