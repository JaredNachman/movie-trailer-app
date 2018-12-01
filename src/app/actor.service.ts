import { Injectable } from '@angular/core';
import { Actor } from './actors/actor';
import { ALL_ACTORS } from './actors/mock-actors';

import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Movie } from '../actors/movie';


 @Injectable({
  providedIn: 'root'
})
export class ActorService {

   constructor(private http: HttpClient) { }

   getActors(): Actor[] {
    return ALL_ACTORS;
  }
   getActor(id: number): Actor {
    return ALL_ACTORS.find(actor => actor.id === id);
  }

    search(term: string): Observable<Movie[]> {
        return this.http
        .get<Movie[]>(`https://api.themoviedb.org/3/search/movie?api_key=c6ea6031412642a807ae3589783d57dc&query=${term}`)
        .map((data) => data['results']);
    }

    getPosts(): any {
        return JSON.parse(localStorage.getItem('FavMovies'));
    }

    orderByService(srtVal, order): any {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies')) || [];
        data = _.orderBy(data, [srtVal], [order]);
        return data;
    }

    filterByService(srtVal): any {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies')) || [];
        if (srtVal !== '') {
            data = _.filter(data, {'original_language': srtVal});
        }
        return data;
    }

    isFavMovie(id: number): string {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies'));
        if (_.find(data, { 'id': id })) {
            return 'fa fa-heart fa-1x';
        }else {
            return 'fa fa-heart-o fa-1x';
        }
    }

    toggleFav(fav): boolean {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies')) || [];
        if (_.find(data, { 'id': fav.id })) {
            data = _.reject(data, { 'id': fav.id }); // if film exist in fav list, its removed from current collection
            localStorage.setItem('FavMovies', JSON.stringify(data));
            return false;
        }else {
            data = _.concat(data, fav); // if not found, concat new film to current collection
            localStorage.setItem('FavMovies', JSON.stringify(data));
            return true;
        }
}
