import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/services/hero-service';
import { Hero } from '../../shared/classes/hero';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes : Hero[] = [];

  constructor(private service : HeroService) { }

  ngOnInit() : void {
    this.service.getHeroes().then(h => this.heroes = h.slice(1, 5));
  }

}
