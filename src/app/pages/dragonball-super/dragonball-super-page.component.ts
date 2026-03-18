  import { Component, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
  interface character {
    id: number;
    name: string;
    power: number;
  }

  @Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super-page',
    imports: [CharacterList],
  })

  export class DragonBallSuperPageComponent {
    name = signal('');
    power = signal(0);

    characters = signal<character[]>([
      { id: 1, name: 'Goku', power: 9001 },
      { id: 2, name: 'Vegeta', power: 8500 },

    ]);


  addCharacter(){
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
  }
