import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './my.interceptor';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({

  declarations: [
    AppComponent,
    ActorsComponent,
    ActorDetailComponent,
    ActorSearchComponent,
    NavigationComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
     useClass: MyInterceptor,
     multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
