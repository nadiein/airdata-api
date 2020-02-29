import { createSelector } from '@ngrx/store';

import { AppState } from '../store/state/app.state';
import { AirdataState } from '../store/state/airdata.state';

const selectAirdata = (state: AppState) => state.data;

export const selectAirdataList = createSelector(
    selectAirdata,
    (state: AirdataState) => state.data
);
