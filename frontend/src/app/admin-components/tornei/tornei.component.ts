import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialog } from '@angular/material/dialog';
import { TournamentDialogComponent } from '../tournament-dialog/tournament-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Tournament } from '../../shared/Tournament';
import { Team } from '../../shared/Team';

const TOURNAMENTS: Tournament[] = [
    {id:1, name:"Calcettum", participants: 8, sport:"Calcio a 5"},
    {id:2, name:"Rullo di tamburi", participants: 12, sport:"Tamburello"},
    {id:3, name:"SerieD", participants: 20, sport:"calcio a 11"},
    {id:4, name:"NOTNBA", participants: 18, sport:"Basket"},
    {id:5, name:"Volare via", participants: 14, sport:"Volano"}
];

const TEAMS: Team[] = [
    {id:1, name:"FC Cinzia", participants: 15, sport:"Calcio a 11", score:0},
    {id:2, name:"Manchester Truffle", participants: 20, sport:"calcio a 11", score: 0},
    {id:3, name:"AC Beghè", participants: 14, sport:"Calcio a 11", score: 0},
    {id:4, name:"Piub FC", participants: 15, sport:"Calcio a 11", score:0},
    {id:5, name:"Cùcù Team", participants: 12, sport:"Calcio a 11", score: 0},
    {id:6, name:"FC Magento", participants: 34, sport:"Calcio a 11", score: 0},
    {id:7, name:"Real Majid", participants: 18, sport:"Calcio a 11", score: 0},
    {id:8, name:"AS Krunic", participants: 14, sport:"Calcio a 11", score: 0},
    {id:9, name:"FC Singo", participants: 33, sport:"Calcio a 11", score:0},
    {id:10, name:"AS Zener", participants: 79, sport:"Calcio a 11", score: 0},
    {id:11, name:"Vox Gaming ASD", participants: 18, sport:"Calcio a 11", score: 0},
    {id:12, name:"Ducati19", participants: 97, sport:"Calcio a 11", score:0}
];



@Component({
    selector: 'app-tornei',
    templateUrl: './tornei.component.html',
    styleUrls: ['./tornei.component.css']
})
export class TorneiComponent  implements AfterViewInit{

    constructor(private restClient : ApiService, private matDialog : MatDialog) { 
        //this.loadData();
    }

    data: any = TEAMS;
    error: any;
    teams: any;
    branches: number[] = [];
    public dataSource = new MatTableDataSource<any>(this.data);

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    // displayedColumns: string[] = [
    //     'name',
    //     'participants', 
    //     'sport',
    //     'action'
    // ];

    displayedColumns: string[] = [
        'name',
        'participants', 
        'sport',
        'score',
        'action'
    ];

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    loadData() : void {
        this.restClient.getTournaments()
        .subscribe(
            data => this.data = data,
            error => this.error = error
        );
    }

    deleteTournament(event: any) : void {
        let id = event.target.id;
        this.restClient.deleteTournament(id)
        .subscribe();
        window.location.reload();
    }

    editTournament(event: any) : void {
        
    }

    // openDialog() {
    //     let dialogRef = this.matDialog.open(TournamentDialogComponent, 
    //         {
    //             data: {
    //                 name: "",
    //                 participants: 0,
    //                 sport: ""
    //             },
    //             disableClose: true
    //         });

    //     dialogRef.afterClosed()
    //     .subscribe(
    //         result => {
    //             alert(result)
    //         }
    //     )
    // }

    applyFilter( filterValue : string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    createNewTournament() : void {
        
    }
    
    //this function checks if the arrays have the same elements
    arrayCompare(array1: any, array2: any) {
        //check if the input are both arrays and have the same lenght
        if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) {
            return false;
        }
        
        // .concat() to not mutate arguments
        const arr1 = array1.concat().sort();
        const arr2 = array2.concat().sort();
        
        //check if the elements in each array are the same
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
    
    //function that calculates the branches 
    calculateBranches(tournament: Tournament): void {
        this.getTeamsFromTournament(tournament);
        
        //loop until both arrays have the same elements
        while(!this.arrayCompare(this.teams, this.branches)){
            //random team number
            let team1 = Math.floor(Math.random() * this.teams.length);
            
            //loop until the team number is different from the other
            do {
                //random team number
                var team2 = Math.floor(Math.random() * this.teams.length);
            }while(team1 === team2)
            
            //add both team in the branches array
            this.branches[this.branches.length] = team1;
            this.branches[this.branches.length] = team2;
        }
    }
    
    //function that calls an API that returns teams from a specific tournament
    getTeamsFromTournament(tournament: Tournament) {
        this.restClient.getTeams(tournament.id)
        .subscribe(
            teams => this.teams = teams, error => this.error = error
        );
    }
    
    compare(team1: Team, team2: Team) {
        if (team1.score < team2.score){
          return -1;
        }
        if (team1.score > team2.score){
          return 1;
        }
        return 0;
    }

    displayRanking(tournament: Tournament) {
        this.getTeamsFromTournament(tournament);

        this.teams.sort(this.compare);
    }
}