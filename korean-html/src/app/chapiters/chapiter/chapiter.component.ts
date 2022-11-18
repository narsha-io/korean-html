import { Component, OnInit } from '@angular/core';
import CHAPITERS from '../../../assets/data.json';
import { ActivatedRoute } from '@angular/router';
import { Chapiter } from './chapiter.model';

@Component({
  selector: 'app-chapiter',
  templateUrl: './chapiter.component.html',
  styleUrls: ['./chapiter.component.scss']
})
export class ChapiterComponent implements OnInit {

  chapiter: Chapiter;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];

    CHAPITERS.forEach((chap: any) => {
      if (chap.id == id) {
        this.chapiter = chap;
      }
    });
  }

}
