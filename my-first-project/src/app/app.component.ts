import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-data-biding></app-data-biding>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor() {}
}
