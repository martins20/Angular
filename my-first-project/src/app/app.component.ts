import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor() {}

  // It will be called when component render into client screen
  ngOnInit(): void {
    console.log("I'll be the first");
  }
}
