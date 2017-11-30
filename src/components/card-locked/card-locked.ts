import { Component } from '@angular/core';

@Component({
  selector: 'card-locked',
  templateUrl: 'card-locked.html'
})
export class CardLockedComponent {

  text: string;

  constructor() {
    console.log('Hello CardLockedComponent Component');
    this.text = 'Hello World';
  }

}
