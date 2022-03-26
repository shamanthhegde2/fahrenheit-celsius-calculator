import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FCConverter';
  input_value: number = 0;
  radio_value: string = '?';
  answer!: number;
  dontShow = true;
  getResult() {
    if (this.radio_value == 'C') {
      this.answer = (this.input_value - 32) * 0.5556;
    } else {
      this.answer = this.input_value * 1.8 + 32;
    }
    this.dontShow = false;
  }
}
