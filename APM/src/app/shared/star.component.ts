import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'comp-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    
    onClick(): void {
        this.notify.emit(`${this.rating} clicked.`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}