import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public name: string = 'Martins';
  public age: number = 21

  constructor() {}

  ngOnInit(): void {}
}
