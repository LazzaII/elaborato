import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders, JsonpClientBackend } from "@angular/common/http";
import { Turno } from './shared/Turno';
import { Access } from './shared/Access';
import { Team } from './shared/Team';
import { Tournament } from './shared/Tournament';

@Injectable({
    providedIn: 'root'
})
export class ApiService 
{
    constructor(private http : HttpClient) { }

	//apiPath : string = "http://localhost:4200/api/"; //TEST LOCALI 
	
	apiPath : string = "/api/"; //IDEEINBIT

	/*
		TUTTI
		Sessioni-Turni
	*/

	getSession() : Observable<any>
	{
		return this.http.get<any>(this.apiPath + "session.php")
			.pipe(
				retry(1)
			);
	}

	startSession() : Observable<any>
    {
        return this.http.get<any>(this.apiPath + "session.php?start")
            .pipe(
                retry(1)
            );
    }

	destroySession() : Observable<any>
    {
        return this.http.get<any>(this.apiPath + "session.php?destroy")
            .pipe(
                retry(1)
            );
    }

	getTurni(settimana : number) : Observable<Turno[]>
	{
		return this.http.get<Turno[]>(this.apiPath + "turno.php?settimana=" + settimana)
            .pipe(
                retry(1)
            );
	}

	/*
		CROCI
		Tornei
	*/

	getTournaments() : Observable <any>
	{ 
		return this.http.get<any>(this.apiPath + "tournaments.php")
			.pipe(
				retry(1)
			);
	} 

	deleteTournament(id : any) {
		return this.http.delete(this.apiPath + "tournaments.php?delete=" + id)
			.pipe(
				retry(1)
			);
	}

	getTeams(id: number) : Observable <Team[]>{
		return this.http.get<Team[]>(this.apiPath + "tournaments.php?getTeams=" + id)
			.pipe(
				retry(1)
			);
	}

	/*
		LAZZA
		Statistiche, Accessi
	*/

	getAccess() : Observable<Access[]>{
		return this.http.get<Access[]>(this.apiPath + "access.php").pipe(
			retry(1)
		);
	}


	
/*     getData(apiUrl : string) : Observable<Student[]>
	{
        return this.http.get<Student[]>(apiUrl)
            .pipe(
                retry(1)
            );
	}

	postData(apiUrl : string, body : any) : Observable<Student[]>
	{
		return this.http.post<Student[]>(apiUrl, body)
			.pipe(
				retry(1)
			);
	}
	
	deleteData(apiUrl : string, body : any) : Observable<Student[]>
	{
		const options = {
			headers: new HttpHeaders({
			    'Content-Type': 'application/json'
			}),
			body: body
        }

		return this.http.delete<Student[]>(apiUrl, options)
			.pipe(
				retry(1)
			);
	}

	putData(apiUrl : string, body : any) : Observable<Student[]>
	{
		return this.http.put<Student[]>(apiUrl, body)
			.pipe(
				retry(1)
			);
	} */
}