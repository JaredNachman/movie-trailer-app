import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-trailer-app';

  constructor( private http: HttpClient ) { //dependency injection, creating an instance of HttpClient called http
    }
}
