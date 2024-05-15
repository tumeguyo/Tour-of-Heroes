import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []
hero: any;



  constructor(private HeroService: HeroService) { }

  getHeroes(){
     this.HeroService.getHeroes().subscribe(heroes=>(this.heroes=heroes))
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  


}


