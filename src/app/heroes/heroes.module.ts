import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroesListComponent }    from './heroes-list/heroes-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroService } from './hero-service';
import { HeroRoutingModule } from './heroes-routing.module';
import { AddStringPipe } from '../shared/pipes/add-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroesListComponent,
    HeroDetailComponent,
    AddStringPipe
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}