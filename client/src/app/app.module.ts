import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AirdataEffects } from './effects/airdata.effects';
import { appReducers } from './reducers/app.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirdataComponent } from './components/airdata/airdata.component';
import { AirdataService } from './services/airdata.service';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        AirdataComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([AirdataEffects]),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        AppRoutingModule

    ],
    providers: [AirdataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
