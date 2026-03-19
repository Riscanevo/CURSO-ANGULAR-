import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);

  addCharacter(): void {
    if (!this.name() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Date.now(),
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
