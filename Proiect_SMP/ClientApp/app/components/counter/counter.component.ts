import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }

    animal: any = {};



    constructor(private dataService: DataService, private route: ActivatedRoute,
        private router: Router) {
        //route.params.subscribe(p => {
        //    if (p.id != null)
        //        this.animal.id = +p['id'];
        //    if (p.proprietarId != null)
        //        this.animal.proprietarID = +p['proprietarId'];

        //});

    }

    ngOnInit() {

        //if (this.animal.id)
        //    this.animalService.getAnimal(this.animal.id).subscribe(x => {
        //        this.animal = x;
        //        console.log(this.animal);

        //    });

        //console.log(this.animal.proprietarId);
    }

    submit() {
        this.dataService.createData1(this.animal)
                .subscribe(
                err => {
                    console.log(err);
                }
                );

    }
}
