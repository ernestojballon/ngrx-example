import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class JokesService {
    private API_BASE_URL = 'https://api.icndb.com';
    constructor(private httpClient: HttpClient) { }
    
    //get chuck norris jokes
    getChuckNorrisJokes(numberOfJokes: number): Observable<any> {
        return this.httpClient
            .get(`${this.API_BASE_URL}/jokes/random/${numberOfJokes}?escape=javascript&limitTo=[nerdy]`)
            .pipe(map((result:any) => result.value));
    }
    
    
}