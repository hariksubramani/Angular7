import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyComponent } from './property/property.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'accomodation',
  component: PropertyComponent,
  children: [
      {
          path: 'list',
          component: PropertyListComponent
      },
      {
          path: 'detail',
          component: PropertyDetailComponent
      }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccomodationRoutingModule { }
