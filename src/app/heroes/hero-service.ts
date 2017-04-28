import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../shared/mocks/hero-mocks';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        // return Promise.resolve(HEROES);
        return new Promise(resolve => {
            setTimeout(() => {resolve(HEROES)}, 800);
        });
    }

    getHeroe(id): Promise<Hero> {
        return new Promise(resolve => {
            resolve(
                this.getHeroes().then(heroes => heroes.find(h => h.id === id))
            );
        })
    }
}
