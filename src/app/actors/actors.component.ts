
import { Component, OnInit } from '@angular/core';

import { Actor } from './actor'
import { ALL_ACTORS } from './mock-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors = ALL_ACTORS;
  selectedActor: Actor;


  constructor() { }

  ngOnInit() {
  }
  onSelect(actor: Actor): void {
      this.selectedActor = actor;
    }

}
