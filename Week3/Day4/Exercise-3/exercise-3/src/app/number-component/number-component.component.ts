import { Component } from '@angular/core';

@Component({
  selector: 'app-number-component',
  template: `
    <p>
      number-component works!
    </p>
    <h2>Number Transformation</h2>
    <p>Original Number: {{ number }}</p>
    <p>Transformed: {{ number | numberTransform }}</p>
  `,
  styles: [
  ]
})
export class NumberComponentComponent {
  number = 255;
}
