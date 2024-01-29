import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  getspinnerstate } from '../../shared/store/Global/App.selector';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrls: ['./loadingspinner.component.css'],
})
export class LoadingspinnerComponent implements OnInit {
  isLoaded = false;
  
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(getspinnerstate).subscribe((res) => {
      this.isLoaded = res;
    });
  }
}
