import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'movie-trailer-app';

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void { // adding the lifecycle hook ngOnInit
    this.http.get('https://api.themoviedb.org/3/movie/550?api_key=277c3719f1bc50ca9c36a758603fe34c').subscribe(data => {
      console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });
  }

}
