import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'counter',
    component:CounterComponent
  },
  {
    path:'blog',
    component:BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
