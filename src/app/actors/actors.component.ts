import { Component, OnInit } from '@angular/core';
import { Actor } from './actor';
import { ActorService } from '../actor.service';




@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[];

  constructor(private actorService: ActorService) {}

  getActors(): void {
    this.actors = this.actorService.getActors();
  }

  ngOnInit() {
    this.getActors();
  }




}
