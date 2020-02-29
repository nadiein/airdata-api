import { Action } from '@ngrx/store';
import { AirdataModel} from '../components/models/airdata.model';

export enum AirdataActionsTypes {
    GetAirdata='[Airdata] Get Airdata',
    GetAirdataSuccess='[Airdata] Get Airdata Success'
}

export class GetAirdata implements Action {
    public readonly type = AirdataActionsTypes.GetAirdata;
}

export class GetAirdataSuccess implements Action {
    public readonly type = AirdataActionsTypes.GetAirdataSuccess;
    constructor(public payload:AirdataModel[]) { }
}

export type AirdataActions = GetAirdata | GetAirdataSuccess;