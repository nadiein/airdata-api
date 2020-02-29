import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { GetAirdata } from '../../actions/airdata.actions'
import { AppState } from '../../store/state/app.state';
import { selectAirdataList } from '../../selectors/airdata.selector';


@Component({
    selector: 'airdata',
    templateUrl: './airdata.component.html',
    styleUrls: ['./airdata.component.scss']
})

export class AirdataComponent implements OnInit {

    airdata$ = this.store.pipe(select(selectAirdataList));
    isMouseOver:boolean;

    constructor(private store: Store<AppState>, private router: Router) {}

    ngOnInit() {
        this.store.dispatch(new GetAirdata());
        this.airdata$.subscribe(res => console.log(res))
    }

    onEventDispatcher = (event:Event, type:EventType) => {
        switch (type) {
            case EventType.MOUSE_OVER: { this.isMouseOver = true; break; }
            case EventType.MOUSE_LEAVE: { this.isMouseOver = false; break; }
        }
    }

}

export enum EventType {
    CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_LEAVE
}

export class EventDispatcher {
    event:Event;
    type:EventType;
}