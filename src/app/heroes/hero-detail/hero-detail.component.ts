import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero-service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent  implements OnInit{
@Input() hero : Hero;  
  
constructor(
  private service : HeroService,
  private route : ActivatedRoute,
  private location : Location,
  private router : Router
){ }

ngOnInit() : void {
  this.route.params
    .switchMap((params : Params) => this.service.getHeroe(+params['id']))
    .subscribe(hero => this.hero = hero);
}

goBack() : void {
  this.location.back();
}

goToHeroes() : void {
  this.router.navigate(['/heroes', { id: this.hero ? this.hero.id : null }]);
}

}
