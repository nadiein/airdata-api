import { RouterReducerState } from '@ngrx/router-store';
import { AirdataState, initialAirdataState } from './airdata.state';

export class AppState {
    router?:RouterReducerState;
    data:AirdataState;
}

export const initialAppState:AppState = {
    data:initialAirdataState
}

export const getInitialState = ():AppState => {
    return initialAppState;
}