import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros'
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  heroes:Hero[];

  selectedHero:Hero;  

  constructor() { }

  ngOnInit() {
     this.heroes= HEROES
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

}
