import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
}
