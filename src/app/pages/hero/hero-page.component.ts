import { Component, signal } from '@angular/core';

@Component({
  templateUrl : './hero-page.component.html',
})
export class HeroPageComponent {

  heroName = signal('Ironman');
  heroAge = signal(45);

  getHeroDescription(){
    return `${ this.heroName()} - ${ this.heroAge()}`;

  }
  updateHero(){
    this.heroName.set('Spiderman');
    this.heroAge.update( currentAge => currentAge + 1);
  }
  updateHeroAge(){
    this.heroAge.set(60);
  }
  resetHeroForm(){
    this.heroName.set('Ironman');
    this.heroAge.set(22);
  }
}
