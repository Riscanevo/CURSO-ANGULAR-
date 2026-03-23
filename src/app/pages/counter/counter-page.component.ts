import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
templateUrl: './counter-page.component.html',
styleUrls:['./counter-page.component.css'],
changeDetection: ChangeDetectionStrategy.OnPush,

})




export class CounterPageComponent {
counterValue = 10;
counterSignal = signal(10);

constructor() {
  setInterval(() => {
    this.increaseBy(1);
    console.log('Tick');
  },2000);
}



increaseBy(amount: number){
  this.counterValue += amount;
  this.counterSignal.update(current => current + amount);
}
resetCounter(){
  this.counterValue = 10;
  this.counterSignal.set(10);
    
}
}
