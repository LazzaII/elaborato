import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spazi',
    templateUrl: './spazi.component.html',
    styleUrls: ['./spazi.component.css']
})
export class SpaziComponent implements OnInit 
{
    spaces : string[];
  
    constructor() 
    {
        this.spaces = ["Palestra interna", "Campo 1", "Campo 2", "Pista"];
    }

    ngOnInit(): void 
    { }

}
