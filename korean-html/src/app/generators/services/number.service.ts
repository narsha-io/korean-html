import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  numberToText(value: number): string {
    // need to manage korean version after
    if(value <= 10) {
       switch(value) {
        case 0: {
          return '';
        }
        case 1: {
          return '일';
        }
        case 2: {
          return '이';
        }
        case 3: {
          return '삼';
        }
        case 4: {
          return '사';
        }
        case 5: {
          return '오';
        }
        case 6: {
          return '육';
        }
        case 7: {
          return '칠';
        }
        case 8: {
          return '팔';
        }
        case 9: {
          return '구';
        }
      }
      return '십';
    } else {
      console.log("new : " + value);
      if(value < 100) {
        console.log('dans les 10 aines');
        return this.numberToText(Math.floor(value / 10)) + this.numberToText(10) + " " + this.numberToText(value % 10);
      } else if(value < 1000) {
        console.log('dans les centaines');
        return this.numberToText(Math.floor(value / 100))  + "백 " + this.numberToText(value % 100);
      } else if(value < 10000) {
        console.log('dans les milles');
        return this.numberToText(Math.floor(value / 1000))  + "천 " + this.numberToText(Math.floor(value % 1000));
      } else if(value < 100000000) {
        console.log('dans les 10 aines milles');
        return this.numberToText(Math.floor(value / 10000))  + "만 " + this.numberToText(Math.floor(value % 10000));
      } else if(value < 1000000000000) {
        console.log('dans les 10 aines milles');
        return this.numberToText(Math.floor(value / 100000000))  + "억 " + this.numberToText(Math.floor(value % 100000000));
      }
      return '??';
    }
  }
}
