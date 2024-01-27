import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { CounterModel } from '../../shared/store/counter.model';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css'],
})
export class CustomcounterComponent {
  constructor(private store: Store<AppStateModel>) {}

  counterinput!: number;
  actionType: string = 'add';

  onIncrement() {
     this.store.dispatch(
      customincrement({
        value: +this.counterinput,
        actionType: this.actionType,
      })
    );
  }
}
