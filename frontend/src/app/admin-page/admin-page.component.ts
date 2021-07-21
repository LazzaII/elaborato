import { Component, OnInit } from '@angular/core';

export enum Section
{
    Accessi = "Accessi",
    Orari = "Orari",
    Preferenze = "Preferenze",
    Sostituzioni = "Sostituzioni",
    Spazi = "Spazi",
    Statistiche = "Statistiche",
    Tornei = "Tornei",
    Esci = "Esci"
}

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.css'],
    host: {
        class:'h-100'
    }
})
export class AdminPageComponent
{
    section: Section;

    constructor()
    { 
        this.section = Section.Orari;
    }

    setSection(s : any)
    {
        this.section = s;
    }
}
