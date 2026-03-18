import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
interface character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [
    //NgClass
  ],
})
export class DragonBallPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  //  { id: 2, name: 'Vegeta', power: 8500 },
  //  { id: 3, name: 'Gohan', power: 7000 },
  //  { id: 4, name: 'Piccolo', power: 500 },
  ]);

//  powerClasses = computed(() => {
//    return (power: number) => {
//      return {
//        'text-danger': power > 9000,
//        'text-primary': power < 9000,
//      }
//    }
//  })





}
