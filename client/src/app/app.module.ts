// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Env
import { environment } from 'src/environments/environment';
// Effects
import { AirdataEffects } from './effects/airdata.effects';
// Reducers
import { appReducers } from './reducers/app.reducers';
// Components
import { AppComponent } from './app.component';
import { AirdataComponent } from './components/airdata/airdata.component';
import { InputComponent } from './components/form-controls/input/input.component';
// Services
import { AirdataService } from './services/airdata.service';

@NgModule({
    declarations: [
        AppComponent,
        AirdataComponent,
        InputComponent
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
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [AirdataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
