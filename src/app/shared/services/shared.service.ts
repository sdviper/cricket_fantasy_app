import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  public matchResult: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  loadMatchSchedule() {
    return this.http.get<any>('https://ipl2021-live.herokuapp.com/get_all_matches_refresh', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      })
    });
  }
  loadMatchResult(loadMatch) {
    // let matchNo=9;
    // loadMatch=21;
    return this.http.get<any>('https://ipl2021-live.herokuapp.com/scorecard?match_no=' + loadMatch, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      })
    });
  }
  l() {
    // let matchNo=9;
    // loadMatch=21;
    return this.http.get<any>('http://e5d6082fd54c.ngrok.io/get_match_data?player_name=sumit', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
      })
    });
  }

  

  getTeams() {
   return this.http.get<any>("assets/teamArray.json");
  }

  // validate(){

  // }

}
