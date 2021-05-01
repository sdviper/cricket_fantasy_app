import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchPredictionsComponent } from './components/match-predictions/match-predictions.component';
import { MatchResultComponent } from './components/match-result/match-result.component';
import { MatchScheduleComponent } from './components/match-schedule/match-schedule.component';

const routes: Routes = [
  {
    path: 'match-result',
    // path:'',
    component: MatchResultComponent
  },
  {
    path: 'match-schedule',
    // path:'',
    component: MatchScheduleComponent
  },
  {
    // path: 'play-games',
    path:'',
    component: MatchPredictionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
