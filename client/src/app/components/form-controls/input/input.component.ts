import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fc-input',
    template: `
        <input
            [id]="props.id"
            [name]="props.name"
            [type]="props.type"
            [className]="props.className ? props.classname + ' form-control' : 'form-control'">
    `,
    styles: [``]
})
export class InputComponent implements OnInit {

    @Input() props:any;

    constructor() { }

    ngOnInit() { }

}
