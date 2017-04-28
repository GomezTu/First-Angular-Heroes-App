import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
  providers: [HeroService]
})
export class HeroesListComponent implements OnInit {
constructor(
  private service : HeroService
  , private router : Router
  , private route : ActivatedRoute
  ) { }

  private selectedId : number;
  selectedHero : Hero;
  heroes : Observable<Hero[]>;

  ngOnInit() : void {
    // this.getHeroes();
    this.heroes = this.route.params.switchMap((params: Params) => {
      this.selectedId = +params['id'];
      return this.service.getHeroes();
    })
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
    this.gotoDetail();
  }

  isSelected(hero : Hero) {
    return hero.id === this.selectedId;
  }

  // getHeroes() : void {
  //   this.service.getHeroes().then(h => this.heroes = h);
  // }

  gotoDetail(){
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
}
