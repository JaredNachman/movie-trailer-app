import { Component, OnInit } from '@angular/core';

import { ACTORS } from './mock-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors = ACTORS;
  selectedActor: Actor;


  constructor() { }

  ngOnInit() {
  }
  onSelect(actor: Actor): void {
      this.selectedActor = actor;
    }

}
