import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',

})
export class CharacterList {
characters = input.required<Character[]>();
}
