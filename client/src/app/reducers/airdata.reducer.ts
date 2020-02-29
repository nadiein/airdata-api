import { AirdataActions, AirdataActionsTypes, } from '../actions/airdata.actions';
import { initialAirdataState, AirdataState } from '../store/state/airdata.state';

export const airdataReducer = (
    state = initialAirdataState,
    action:AirdataActions
):AirdataState => {
    switch(action.type) {
        case AirdataActionsTypes.GetAirdata: {
            return {
                ...state
            }
        }
        case AirdataActionsTypes.GetAirdataSuccess: {
            return {
                ...state,
                data:action.payload
            }
        }
        default:
                return state;
    }
}