import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { GetAirdata } from '../../actions/airdata.actions'
import { AppState } from '../../store/state/app.state';
import { selectAirdataList } from '../../selectors/airdata.selector';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'airdata',
    templateUrl: './airdata.component.html',
    styleUrls: ['./airdata.component.scss']
})

export class AirdataComponent implements OnInit {

    airdata$ = this.store.pipe(select(selectAirdataList));
    isMouseOver:boolean;
    isClicked:boolean;
    faTimes:any = faTimes;
    inputProps = {
        id:'search-filter',
        name:'searchFilter',
        type:'text'
    }

    constructor(private store: Store<AppState>, private router: Router) {}

    ngOnInit() {
        this.store.dispatch(new GetAirdata());
        this.airdata$.subscribe(res => console.log(res))
    }

    onEventDispatcher = (event:Event, type:EventType) => {
        switch (type) {
            // case EventType.MOUSE_OVER: { this.isMouseOver = true; this.isClicked = true; break; }
            // case EventType.MOUSE_LEAVE: { this.isMouseOver = true; break; }
            case EventType.CLICK: { this.isClicked = false; this.isMouseOver = false; break; }
            case EventType.DBL_CLICK: { this.isMouseOver = true; this.isClicked = true; break; }
        }
    }

}

export enum EventType {
    CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_LEAVE, DBL_CLICK
}

export class EventDispatcher {
    event:Event;
    type:EventType;
}