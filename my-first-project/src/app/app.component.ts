import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

// *ngIf => is a condition to be able to render something if it is true

@Component({
  selector: 'app-root',
  template: `
    <!-- To pass some prop to other component just pass the [component-variable-or-method-name]="value" -->
    <app-title title="Hello" *ngIf="shouldDestroyTitleComponent"></app-title>

    {{ value }}

    <button (click)="increment()">increment</button>

    <br />

    <button (click)="destroyTitleComponent()">Destroy title component</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public value: number = 1;
  public shouldDestroyTitleComponent: boolean = true;

  constructor() {}

  public increment(): number {
    return (this.value += 1);
  }

  public destroyTitleComponent(): void {
    this.shouldDestroyTitleComponent = false;
  }

  // It will be called when component render into client screen
  ngOnInit(): void {
    // console.log("I'll be the first");
  }

  // it will be called always when component has some change.
  ngDoCheck(): void {
    // console.log('This is ngDoCheck');
  }

  // it will be called always after the component content has some change on component initialization.
  ngAfterContentInit(): void {
    // console.log('This is ngAfterContentInit');
  }

  // it will be called always after the component content has some change.
  ngAfterContentChecked(): void {
    // console.log('This is ngAfterContentChecked');
  }

  // it will be called always after when component has some change and render into client on component initialization.
  ngAfterViewInit(): void {
    // console.log('This is ngAfterViewInit');
  }

  // it will be called always after when component has some change and render into client.
  ngAfterViewChecked(): void {
    // console.log('This is ngAfterViewChecked');
  }
}
