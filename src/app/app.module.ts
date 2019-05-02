import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightService } from './flight-service.service';
import { FlightComponent } from './flight-add/flight/flight.component';
import { AirModule } from './air/air.module';
import { AccomodationModule } from './accomodation/accomodation.module';
import { ExcursionModule } from './excursion/excursion.module';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AirModule,
    AccomodationModule,
    ExcursionModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent],
  exports: [FlightComponent, ErrorComponent]
})
export class AppModule { }
