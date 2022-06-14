import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- To pass some prop to other component just pass the [component-variable-or-method-name]="value" -->
    <app-title title="Hello"></app-title>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  // It will be called when component render into client screen
  ngOnInit(): void {
    console.log("I'll be the first");
  }
}
