import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../store/state/app.state';
import { airdataReducer } from '../reducers/airdata.reducer';

export const appReducers:ActionReducerMap<AppState, any> = {
    router:routerReducer,
    data:airdataReducer
}