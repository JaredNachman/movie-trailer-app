import { Injectable } from '@angular/core';
 import { Actor } from './actors/actor';
import { ALL_ACTORS } from './actors/mock-actors';

 @Injectable({
  providedIn: 'root'
})
export class ActorService {

   constructor() { }

   getActors (): Observable<Actor[]> {
      return this.http.get<Actor[]>(this.actorsUrl)
        .pipe(
          tap(_ => this.log('fetched actors')),
          catchError(this.handleError('getActors', []))
        );
    }

    /** GET actor by id. Return `undefined` when id not found */
    getActorNo404<Data>(id: number): Observable<Actor> {
      const url = `${this.actorsUrl}/?id=${id}`;
      return this.http.get<Actor[]>(url)
        .pipe(
          map(actors => actors[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} actor id=${id}`);
          }),
          catchError(this.handleError<Actor>(`getActor id=${id}`))
        );
    }

    /** GET actor by id. Will 404 if id not found */
    getActor(id: number): Observable<Actor> {
      const url = `${this.actorsUrl}/${id}`;
      return this.http.get<Actor>(url).pipe(
        tap(_ => this.log(`fetched actor id=${id}`)),
        catchError(this.handleError<Actor>(`getActor id=${id}`))
      );
    }




   searchActors(term: string): Observable<Actor[]> {
    if (!term.trim()) {
      // if not search term, return empty actor array.
      return of([]);
    }
    return this.http.get<Actors[]>(`${this.actorsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found actors matching "${term}"`)),
      catchError(this.handleError<Actor[]>('searchActors', []))
    );
  }
   getActors(): Actor[] {
    return ALL_ACTORS;
  }
   getActor(id: number): Actor {
    return ALL_ACTORS.find(actor => actor.id === id);
  }
}
