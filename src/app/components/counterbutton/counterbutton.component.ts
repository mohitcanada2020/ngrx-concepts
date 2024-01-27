import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  rename,
  reset,
} from '../../shared/store/counter.actions';
import { CounterModel } from '../../shared/store/counter.model';
import { getchannelName } from '../../shared/store/counter.selector';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css'],
})

export class CounterbuttonComponent implements OnInit {
  constructor(private store: Store<AppStateModel>) {}

  counter$ = this.store.select(getchannelName);

  ngOnInit() {
    this.counter$.subscribe((res)=>{
      console.log('button')
    })
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  onRename() {
    this.store.dispatch(rename({ name: 'STB' }));
  }
}
