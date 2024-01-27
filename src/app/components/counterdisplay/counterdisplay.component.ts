import { Component } from '@angular/core';
import { CounterModel } from '../../shared/store/counter.model';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getCounter } from '../../shared/store/counter.selector';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css'],
})
export class CounterdisplayComponent {
  counterDisplay!: any;
  channelname!:string;
  counterSubscribe!:Subscription;
  counter$ = this.store.select(getCounter);


  constructor(private store: Store<AppStateModel>) {}

  ngOnInit(){
    this.counter$.subscribe((res)=>{
      console.log('display')
    })
  }
  
}
