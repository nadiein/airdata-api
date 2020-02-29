import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as airdataReducer from './reducers/airdata.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(airdataReducer.airdataFeatureKey, airdataReducer.reducer)
    ]
})
export class AirdataModule { }
