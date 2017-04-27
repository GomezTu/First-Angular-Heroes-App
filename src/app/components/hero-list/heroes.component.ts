import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/classes/hero';
import { HeroService } from '../../shared/services/hero-service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
constructor(
  private service : HeroService,
  private router : Router
  ) { }

  selectedHero : Hero;
  heroes : Hero[];

  ngOnInit() : void {
    this.getHeroes();
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.service.getHeroes().then(h => this.heroes = h);
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
