import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Turno } from '../shared/Turno';

@Component({
    selector: 'app-index-page',
    templateUrl: './index-page.component.html',
    styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent
{
    settimana : number;

    turni : Turno[];

    constructor(private apiService : ApiService) 
    {
        this.settimana = 0;
        this.turni = [];

        this.loadTurni();
    }

    loadTurni() : void
    {
        this.apiService.getTurni(this.settimana)
            .subscribe(result => this.turni = result);
    }
}
