import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getData() {
        return this.http.get('/api/Data').map(res => res.json());
    }

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



    createData(data: any) {
        return this.http.post('/api/Data', data);
    }

    createData1(data: any) {
        return this.http.post('/api/Data1', data);
    }
}
