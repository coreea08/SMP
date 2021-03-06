import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {

    gaz1: any[]
    gaz2: any[]
    gaz3: any[]
    public date: any[]

    selectDay: any = new Date().toISOString().slice(0, 10);
    startDate: any
    endDate: any
    bool: boolean = false

    constructor(private dataService: DataService, private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.dataService.getGaz1Ho().subscribe(x => {
            this.gaz1 = x;
            this.dataService.getGaz2Ho().subscribe(x1 => {
                this.gaz2 = x1;
                this.dataService.getGaz3Ho().subscribe(x => {
                    this.gaz3 = x;
                    this.dataService.getDateTimeHo().subscribe(x => {
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

    public lineChartLabels: Array<any> = [];
    public lineChartLabels2: Array<any> = [];

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

        if (this.startDate == "" && this.endDate == "")
            this.bool = false;

        if (this.startDate == undefined || (this.startDate == "" && this.endDate != ""))
            this.startDate = "00:00"
       // console.log(this.startDate);

        if (this.endDate == undefined || (this.endDate == "" && this.startDate != ""))
            this.endDate = "23:59"

        if (this.startDate > this.endDate) {
            let a = this.startDate;
            this.startDate = this.endDate;
            this.endDate = a;
        }

        this.dataService.getGaz1H(this.startDate, this.endDate, this.selectDay).subscribe(x => {
            this.gaz1 = x;
            this.dataService.getGaz2H(this.startDate, this.endDate, this.selectDay).subscribe(x1 => {
                this.gaz2 = x1;
                this.dataService.getGaz3H(this.startDate, this.endDate, this.selectDay).subscribe(x2 => {
                    this.gaz3 = x2;
                    this.dataService.getDateTimeH(this.startDate, this.endDate, this.selectDay).subscribe(x3 => {
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
