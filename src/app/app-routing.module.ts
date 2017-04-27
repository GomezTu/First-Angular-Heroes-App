import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/hero-list/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes : Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }