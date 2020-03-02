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
    styles: [`
        .form-control {
            width: 100%;
            height: 100%;
            border: 0;
            background: none;
            font: inherit;
            color: inherit;
        }
        .form-control:focus {
            outline: none;
        }
    `]
})
export class InputComponent implements OnInit {

    @Input() props:any;

    constructor() { }

    ngOnInit() { }

}
