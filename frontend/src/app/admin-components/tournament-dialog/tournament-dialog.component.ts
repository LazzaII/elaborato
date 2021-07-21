import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tournament-dialog',
  templateUrl: './tournament-dialog.component.html',
  styleUrls: ['./tournament-dialog.component.css']
})

export class TournamentDialogComponent implements OnInit {

  sports : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data : {name : string, participants : number, sport : string}, private matDialogRef : MatDialogRef<TournamentDialogComponent>) { 
    this.sports = [
      "Calcio a 5", "Basket", "Pallavolo", "Volano", "Tamburello"
    ];
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.matDialogRef.close(this.data);
  }

  closeDialog() {
    this.matDialogRef.close();
  }
}
