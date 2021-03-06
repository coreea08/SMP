import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

    gaz1: any[]
    gaz2: any[]
    gaz3: any[]
    public date: any[]

    startDate: any
    endDate: any
    bool: boolean = false

    constructor(private dataService: DataService, private route: ActivatedRoute,
        private router: Router) {
        
    }

    ngOnInit() {
        this.dataService.getGaz1().subscribe(x => {
            this.gaz1 = x;
            this.dataService.getGaz2().subscribe(x1 => {
                this.gaz2 = x1;
                this.dataService.getGaz3().subscribe(x => {
                    this.gaz3 = x;
                    this.dataService.getDateTime().subscribe(x => {
                        this.date = x;

                        this.lineChartData.push({ data: this.gaz1, label: 'O2' });
                        this.lineChartData.push({ data: this.gaz2, label: 'CO' });
                        this.lineChartData.push({ data: this.gaz3, label: 'CO2' });
                        this.lineChartLabels = this.date;
                        console.log(this.date)
                            
                    });
                });
            });
        });

    }


    // lineChart
    public lineChartData: Array<any> = [];
    public lineChartData2: Array<any> = [];

    //public lineChartData: Array<any> = [
    //    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Oxygen' },
    //    { data: [28, 48, 40, 19, 86, 27, 90], label: 'CO' },
    //    { data: [18, 48, 77, 9, 100, 27, 40], label: 'CO2' }
    //];

    public lineChartLabels: Array<any> = [];
    public lineChartLabels2: Array<any> = [];
    //public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // red
            backgroundColor: 'rgba(0,128,0,0.5)',
            borderColor: 'rgba(0,128,0,1.0)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#EA2E2E',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { //blue
            backgroundColor: 'rgba(0,128,128,0.3)',
            borderColor: 'rgba(0,0,255,1.0)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#EA2E2E',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // purple
            backgroundColor: 'rgba(255,0,255,0.5)',
            borderColor: 'rgba(128,0,128,1.0)',
            pointBackgroundColor: 'rgba(0,0,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#EA2E2E',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    public randomize(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    show() {
        this.lineChartData2 = [];
        this.lineChartLabels2 = [];


        if (this.startDate == "" && this.endDate == "") {
            this.bool = false;
            return
        }
  //      console.log(this.startDate);
//        console.log(this.endDate);

        if (this.startDate == undefined || (this.startDate == "" && this.endDate != ""))
            this.startDate = new Date().toISOString().slice(0, 10);

        if (this.endDate == undefined || (this.endDate == "" && this.startDate != ""))
            this.endDate = new Date().toISOString().slice(0, 10);

        let b = new Date(this.endDate);
        let c = new Date(this.startDate)

        if (b < c) {
            let a = this.startDate;
            this.startDate = this.endDate;
            this.endDate = a;
        }

        this.dataService.getGaz1Specific(this.startDate, this.endDate).subscribe(x => {
            this.gaz1 = x;
            this.dataService.getGaz2Specific(this.startDate, this.endDate).subscribe(x1 => {
                this.gaz2 = x1;
                this.dataService.getGaz3Specific(this.startDate, this.endDate).subscribe(x2 => {
                    this.gaz3 = x2;
                    this.dataService.getDateTimeSpecific(this.startDate, this.endDate).subscribe(x3 => {
                        this.lineChartData2 = [];
                        this.lineChartLabels2 = [];
                        this.lineChartData2.push({ data: this.gaz1, label: 'O2' });
                        this.lineChartData2.push({ data: this.gaz2, label: 'CO' });
                        this.lineChartData2.push({ data: this.gaz3, label: 'CO2' });
                        this.lineChartLabels2 = x3;
                        console.log(this.lineChartLabels2);

                        this.bool = true;
                    });
                });
            });
        });
    }
}
