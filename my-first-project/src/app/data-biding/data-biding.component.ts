import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
