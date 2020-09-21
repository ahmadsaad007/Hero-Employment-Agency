import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero/hero';
import { HEROES } from './hero/heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    return of(HEROES.find(hero => hero.id === id));
  }
}
