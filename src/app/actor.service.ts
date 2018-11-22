import { Injectable } from '@angular/core';
 import { Actor } from './actors/actor';
import { ALL_ACTORS } from './actors/mock-actors';
 @Injectable({
  providedIn: 'root'
})
export class ActorService {
   constructor() { }

   searchActors(term: string): Observable<Actor[]> {
    if (!term.trim()) {
      // if not search term, return empty actor array.
      return of([]);
    }
    return this.http.get<Actor>(`${this.actorsUrl}/?name=${term}`).pipe(
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
