import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  // @Input is a decorator to declare to variable is changes passed by props
  @Input()
  public title: string = 'Hello World';

  constructor() {}

  // Life cicle of angular to execute always when component has some change from @Input decorator
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Changes made successfully');
  }

  // Life cicle of angular to execute always when component was destroyed
  ngOnDestroy(): void {
    console.log('I was destroyed...');
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
