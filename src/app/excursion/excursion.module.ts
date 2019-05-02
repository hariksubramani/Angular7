import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcursionRoutingModule } from './excursion-routing.module';
import { SurfingComponent } from './surfing/surfing.component';
import { SurfingListComponent } from './surfing-list/surfing-list.component';

@NgModule({
  declarations: [SurfingComponent, SurfingListComponent],
  imports: [
    CommonModule,
    ExcursionRoutingModule
  ],
  exports: [SurfingComponent, SurfingListComponent]
})
export class ExcursionModule { }
