import {
  Component,
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
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  // @Input is a decorator to declare to variable is changes passed by props
  @Input()
  public title: string = 'Hello World';

  constructor() {}

  // Life cicle of angular to execute always when component starts
  ngOnInit(): void {}

  // Life cicle of angular to execute always when component has some change from @Input decorator
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Changes made successfully');
  }

   // Life cicle of angular to execute always when component was destroyed
  ngOnDestroy(): void {
    console.log("I was destroyed...")
  }
}
