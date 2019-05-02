import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfingComponent } from './surfing/surfing.component';
import { SurfingListComponent } from './surfing-list/surfing-list.component';

const routes: Routes = [{
  path: 'excursion',
  component: SurfingComponent,
  children: [
      {
          path: 'list',
          component: SurfingListComponent
      }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcursionRoutingModule { }
