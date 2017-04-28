import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent }  from './heroes-list/heroes-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroesListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(heroesRoutes) ],
  exports: [ RouterModule ]
})
export class HeroRoutingModule { }