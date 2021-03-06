import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { GraphComponent } from './components/graph/graph.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataService } from './services/data.service';
import { Graph1Component } from './components/graph1/graph1.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        GraphComponent,
        Graph1Component,

    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ChartsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
      
            { path: 'graph', component: GraphComponent },
            { path: 'graph1', component: Graph1Component },
            { path: '**', redirectTo: 'home' },
        ])
    ],
    providers: [
        DataService,
    ]
})
export class AppModuleShared {
}
