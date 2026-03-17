import { Component, signal } from '@angular/core';
interface character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonBallPageComponent {

  characters = signal<character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
  ])

}
