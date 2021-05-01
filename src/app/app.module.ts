import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchPredictionsComponent } from './components/match-predictions/match-predictions.component';
import { MatchResultComponent } from './components/match-result/match-result.component';
import { MatchScheduleComponent } from './components/match-schedule/match-schedule.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    MatchScheduleComponent,
    MatchResultComponent,
    MatchPredictionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
