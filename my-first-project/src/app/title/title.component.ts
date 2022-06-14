import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  public title: string = 'Hello World';

  constructor() {}

  // Life cicle of angular to execute always when component starts
  ngOnInit(): void {}
}
