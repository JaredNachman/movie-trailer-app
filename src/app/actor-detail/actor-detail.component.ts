import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { ACTORS } from './mock-actors';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
    @Input() actor: Actor;

  constructor() { }

  ngOnInit() {
  }

}
