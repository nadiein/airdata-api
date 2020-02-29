import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { GetAirdata, AirdataActionsTypes, GetAirdataSuccess } from '../actions/airdata.actions';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { AirdataService } from '../services/airdata.service';

@Injectable()
export class AirdataEffects {
    constructor (
        private airdataService:AirdataService,
        private actions:Actions,
        private store:Store<AppState>
    ) { }

    @Effect()
    getUsers$ = this.actions.pipe(
        ofType<GetAirdata>(AirdataActionsTypes.GetAirdata),
        switchMap(() => this.airdataService.getAirdata('beijing')),
        switchMap((res:any) => of(new GetAirdataSuccess(res)))
    );


    // @Effect()
    // getAirdata() {
    //     return this.actions.pipe(
    //         ofType<GetAirdata>(AirdataActionsTypes.GetAirdata),
    //         map(action => action.payload),
    //         withLatestFrom(this.store.pipe(select(selectAirdataList))),
    //         switchMap()
    //     )
    // }
}