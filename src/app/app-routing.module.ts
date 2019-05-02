import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightAddComponent } from './flight-add/flight-add.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: AppComponent},
  {path: 'flights', loadChildren: './air/air.module#AirModule'},
  {path: 'hotels', loadChildren: './accomodation/accomodation.module#AccomodationModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
