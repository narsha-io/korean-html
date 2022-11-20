import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  constructor(private numberService: NumberService) { }

  value: number;
  valueText: string;
  text: string;
  ranges: number[] = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
  range: number;

  ngOnInit(): void {
    this.range = 10;
    this.next();  
  }

  next(): void {
    this.applyValue(this.numberService.getRandomInt(this.range));
  }

  applyValue(value: number) {
    this.value = value;
    this.valueText = this.formatNumber(this.value);
    this.text = this.numberService.numberToText(this.value);
  }

  changeRange(event: Event): void {
    this.range = parseInt((event.target as HTMLInputElement).value);
    this.next();
  }

  formatNumber(value: number): string {
    if(value > 9999) {
      return '' + this.formatNumber(Math.floor(value / 10000)) + '.' + this.formatNumber(value % 10000);
    }
    return ''+value;
  }

  setValue(value: Event): void {
    this.applyValue(parseInt((value.target as HTMLInputElement).value));
  }
}