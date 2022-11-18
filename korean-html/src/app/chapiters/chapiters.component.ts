import { Component, OnInit } from '@angular/core';
import CHAPITERS from '../../assets/data.json';

@Component({
  selector: 'app-chapiters',
  templateUrl: './chapiters.component.html',
  styleUrls: ['./chapiters.component.scss']
})
export class ChapitersComponent implements OnInit {

  readonly chapiters = CHAPITERS;

  constructor() { }

  ngOnInit(): void {
  }

}
