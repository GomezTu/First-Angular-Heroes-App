import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisService } from './crisis-service';
import { CrisisDetailResolver } from './crisis-detail/crisis-detail-resolver.service';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
    CrisisListComponent
  ],
  providers: 
  [
    CrisisService,
    CrisisDetailResolver,
    CanDeactivateGuard
  ]
})
export class CrisisCenterModule { }
