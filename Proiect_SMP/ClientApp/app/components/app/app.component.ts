import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        //this.dataService.serialPort().subscribe(x => {
            
        //});

    }
}
