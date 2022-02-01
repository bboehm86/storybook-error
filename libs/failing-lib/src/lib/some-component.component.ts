import { Component } from '@angular/core';

@Component({
  selector: 'storybook-error-some-component',
  template: ` <p>some-component works!</p> `,
  // WORKS
  //styleUrls: ['some-component.component.scss'],

  // WORKS
  // styles: ['test{color:white}'],

  // Does NOT work
  styles: [''],
})
export class SomeComponentComponent {}
