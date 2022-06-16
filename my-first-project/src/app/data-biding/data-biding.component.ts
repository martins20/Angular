import { Component, OnInit } from '@angular/core';

type Position = {
  x: number;
  y: number;
};

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public name: string = 'Martins';
  public age: number = 21;

  public isButtonDisabled: boolean = true;

  public imageSource: string = 'https://www.github.com/martins20.png';

  public imageAlt: string = 'A dinamic image using a property biding';

  public position: Position = { x: 0, y: 0 };

  constructor() {}

  public callAlertEvent(): void {
    window.alert('I was called !!!');
  }

  public mouseMoveTest(event: MouseEvent) {
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;

    console.log(this.position);
  }

  ngOnInit(): void {}
}
