import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cardWithValues',
  templateUrl: './cardWithValues.component.html',
  styleUrls: ['./cardWithValues.component.css']
})
export class CardWithValuesComponent implements OnInit {
  @Input() iconImage: string;
  @Input() nomeCampo: string;
  @Input() valor: string;

  constructor() { }

  ngOnInit() {
  }

}
