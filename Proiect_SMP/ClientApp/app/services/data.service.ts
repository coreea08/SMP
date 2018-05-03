import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    //get all
    getData() {
        return this.http.get('/api/Data').map(res => res.json());
    }

    //for get all separated
    getGaz1() {
        return this.http.get('/api/Gaz1').map(res => res.json());
    }
    getGaz2() {
        return this.http.get('/api/Gaz2').map(res => res.json());
    }

    getGaz3() {
        return this.http.get('/api/Gaz3').map(res => res.json());
    }

    getDateTime() {
        return this.http.get('/api/DateTime').map(res => res.json());
    }

    // for get per year
    getGaz1Specific(startDate: any, endDate: any) {
        return this.http.get('/api/Gaz1/' + startDate + '/' + endDate).map(res => res.json());
    }
    getGaz2Specific(startDate: any, endDate: any) {
        return this.http.get('/api/Gaz2/' + startDate + '/' + endDate).map(res => res.json());
    }
    getGaz3Specific(startDate: any, endDate: any) {
        return this.http.get('/api/Gaz3/' + startDate + '/' + endDate).map(res => res.json());
    }

    getDateTimeSpecific(startDate: any, endDate: any) {
        return this.http.get('/api/DateTime/' + startDate + '/' + endDate).map(res => res.json());
    }

    // get per day without hour restriction
    getGaz1Ho() {
        return this.http.get('/api/Gaz1H').map(res => res.json());
    }
    getGaz2Ho() {
        return this.http.get('/api/Gaz2H').map(res => res.json());
    }

    getGaz3Ho() {
        return this.http.get('/api/Gaz3H').map(res => res.json());
    }

    getDateTimeHo() {
        return this.http.get('/api/DateTimeH').map(res => res.json());
    }

    // for get per day
    getGaz1H(startHour: any, endHour: any, sDay: any) {
        return this.http.get('/api/Gaz1H/' + startHour + '/' + endHour + '/' + sDay).map(res => res.json());
    }
    getGaz2H(startHour: any, endHour: any, sDay: any) {
        return this.http.get('/api/Gaz2H/' + startHour + '/' + endHour + '/' + sDay).map(res => res.json());
    }
    getGaz3H(startHour: any, endHour: any, sDay: any) {
        return this.http.get('/api/Gaz3H/' + startHour + '/' + endHour + '/' + sDay).map(res => res.json());
    }

    getDateTimeH(startHour: any, endHour: any, sDay: any) {
        return this.http.get('/api/DateTimeH/' + startHour + '/' + endHour + '/' + sDay).map(res => res.json());
    }


    createData(data: any) {
        return this.http.post('/api/Data', data);
    }

    createData1(data: any) {
        return this.http.post('/api/Data1', data);
    }
}
