import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private dataService: DataService) {

    }

    open() {
        this.dataService.serialPort().subscribe(x => {

        });

    }

    close() {
        this.dataService.closeSerialPort().subscribe(x => {

        });

    }
}
