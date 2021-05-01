import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-match-predictions',
  templateUrl: './match-predictions.component.html',
  styleUrls: ['./match-predictions.component.css']
})
export class MatchPredictionsComponent implements OnInit {
  selectedValue;
  batsmanInnings1: string;
  bowlerInnings1: string;
  batsmanInnings2: string;
  bowlerInnings2: string;
  winningTeam;

  panelOpenState = false;
  constructor(private service: SharedService) { }
  public matchSchedule: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  todayMatch = [];
  todayMatchName;
  matchResult;

  innings1;
  innings2;

  innings1Score;
  innings2Score;
  matchNo;

  firstInningsPPRuns = 0;
  firstInningsMORuns = 0;
  firstInningsDORuns = 0;
  firstInningsPPWickets = 0;
  firstInningsMOWickets = 0;
  firstInningsDOWickets = 0;
  firstInningsPPPoints = 0;
  firstInningsMOPoints = 0;
  firstInningsDOPoints = 0;

  secondInningsPPRuns = 0;
  secondInningsMORuns = 0;
  secondInningsDORuns = 0;
  secondInningsPPWickets = 0;
  secondInningsMOWickets = 0;
  secondInningsDOWickets = 0;
  secondInningsPPPoints = 0;
  secondInningsMOPoints = 0;
  secondInningsDOPoints = 0;

  ngOnInit() {
    this.service.l().subscribe(data => {
      // this.matchSchedule.next(data.IPL2021);
      console.log(data);
    })

    // select("#")
    // console.log(this.matchSchedule);

    this.getTodayMatch()
    this.getValidation()
    this.getPointSystem()

    // let s=select('#firstPPRun')
    // console.log(s);
  }
  // ngAfterViewInit(){
  //   // console.log(this.matchSchedule);

  //   let s=select('#firstPP')._groups[0][0].classList.add('hideField')
  //   console.log(select('#firstPP')._groups[0]);

  // }

  getTodayMatch() {
    this.service.loadMatchSchedule().subscribe(data => {
      this.matchSchedule.next(data.IPL2021);
      console.log(this.matchSchedule.value);
      let today = new Date()
      let dd: any = today.getDate();
      let mm: any = today.getMonth() + 1;
      // let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      let currentDate = dd + '/' + mm + '/' + today.getFullYear();
      console.log(currentDate);
      this.matchSchedule.value.forEach(element => {
        if (currentDate === element.match_date) {
          this.todayMatch.push(element)
          console.log(this.todayMatch);
          this.todayMatchName = this.todayMatch[0].match_name
          console.log(this.todayMatchName);
        }
      });
      console.log(this.todayMatch[0]);
      this.service.loadMatchResult(this.todayMatch[0].match_no).subscribe(data => {
        console.log(data);
        console.log(data.toss_result.chose_to);
        console.log(this.todayMatchName.split(',')[0]);

        // if(data.toss_result.chose_to === 'bat'){
        //   if(this.todayMatchName.split(',')[0].split('vs')[0] === data.toss_result.winning_team){
        //     this.innings1=this.todayMatchName.split(',')[0].split('vs')[0].trim()
        //     this.innings2=this.todayMatchName.split(',')[0].split('vs')[1].trim()
        //   }else{
        //     this.innings1=this.todayMatchName.split(',')[0].split('vs')[1].trim()
        //     this.innings2=this.todayMatchName.split(',')[0].split('vs')[0].trim()
        //   }
        // }
        // else if(data.toss_result.chose_to === 'bowl'){
        //   if(this.todayMatchName.split(',')[0].split('vs')[0] === data.toss_result.winning_team){
        //     this.innings1=this.todayMatchName.split(',')[0].split('vs')[1].trim()
        //     this.innings2=this.todayMatchName.split(',')[0].split('vs')[0].trim()
        //   }else{
        //     this.innings1=this.todayMatchName.split(',')[0].split('vs')[0].trim()
        //     this.innings2=this.todayMatchName.split(',')[0].split('vs')[1].trim()
        //   }
        // }

        // debugger
        if (this.todayMatchName.split(',')[0].split('vs')[0].trim() === data.toss_result.winning_team) {
          if (data.toss_result.chose_to === 'bat') {
            this.innings1 = this.todayMatchName.split(',')[0].split('vs')[0].trim()
            this.innings2 = this.todayMatchName.split(',')[0].split('vs')[1].trim()

          } else {
            this.innings1 = this.todayMatchName.split(',')[0].split('vs')[1].trim()
            this.innings2 = this.todayMatchName.split(',')[0].split('vs')[0].trim()
          }
        } else {
          if (data.toss_result.chose_to === 'bat') {
            this.innings1 = this.todayMatchName.split(',')[0].split('vs')[1].trim()
            this.innings2 = this.todayMatchName.split(',')[0].split('vs')[0].trim()
          } else {
            this.innings1 = this.todayMatchName.split(',')[0].split('vs')[0].trim()
            this.innings2 = this.todayMatchName.split(',')[0].split('vs')[1].trim()
          }
        }
        this.matchResult = data;
        this.innings1Score=this.matchResult.Innings1[2].score
        this.innings2Score=this.matchResult.Innings2[2].score
        this.matchNo=this.todayMatchName.split(',')[1]
        this.getPointSystem()
        console.log(this.innings1);
        console.log(this.innings2);

        // if(data!==null){

        //   this.matchResult=data

        // }

        // console.log(this.matchResult.playing_eleven[this.innings1]);
        // console.log(this.matchResult.playing_eleven[this.innings2]);


      })
    })


  }
  predict() {

    // console.log(this.ss.value);
    // console.log(this.firstInningsPPRuns);

    // let s=select('#firstPPRun')
    // console.log(s._groups);

    // s.forEach(element => {

    //   console.log(element);
    // });

    console.log(this.todayMatch[0]);

    //! validations pending
    // if(this.firstInningsPPRuns===null)
    //   this.firstInningsPPRuns=0

    let postObject = {
      "match_no": this.todayMatch[0].match_no,
      "player_name": "",
      "total_points": 0,
      "predictions": {
        "firstInnings": [
          {
            "runs": this.firstInningsPPRuns,
            "wickets": this.firstInningsPPWickets,
            "points": 0
          },
          {
            "runs": this.firstInningsMORuns,
            "wickets": this.firstInningsMOWickets,
            "points": 0
          }, {
            "runs": this.firstInningsDORuns,
            "wickets": this.firstInningsDOWickets,
            "points": 0
          }
        ]
        ,

        "secondInnings": [
          {
            "runs": this.secondInningsPPRuns,
            "wickets": this.secondInningsPPWickets,
            "points": 0
          },
          {
            "runs": this.secondInningsMORuns,
            "wickets": this.secondInningsMOWickets,
            "points": 0
          }, {
            "runs": this.secondInningsDORuns,
            "wickets": this.secondInningsDOWickets,
            "points": 0
          }
        ]
      }

    }
    console.log(postObject);

  }
  getValidation() {
    // let s=select('#firstPPRun')
    // console.log(s);

    // let a="0.1"
    // let b="6.4"
    // if(a>'0'){
    //   console.log(12333);

    // }
    // this.service.loadMatchResult(19).subscribe(data=>{
    //   console.log(data);
    //   if(data.Innings1[2].overs > "0"){


    //   }else if(data.Innings1[2].overs > ""){

    //   }else if(data.Innings1[2].overs > "16"){

    //   }else if(data.Innings2[2].overs <= "16"){

    //   }else if(data.Innings2[2].overs > "6"){

    //   }else if(data.Innings2[2].overs > "6"){

    //   }else{

    //   }

    // })


  }

  predictTopPerformer() {
    // console.log(1);
    // console.log(this.selectedValue);


  }
  selectChangeHandler(event: any) {
    //update the ui
    // console.log(event);

    // this.batsmanInnings1 = event.target.inner;
    // console.log(this.batsmanInnings1);

  }


  getPointSystem() {

    let result = {
      "name": "Chennai Super Kings ",
      "points": ""
    }

    let totalPoints;

    // let topScoreInnings1;
    let predictionInnings1 = {
      "top_batsman": {
        "name": "Manish Pandey",
        "points": ""
      },
      "top_bowler": {
        "name": "Lungi Ngidi",
        "points": ""
      }
    }
    let predictionInnings2 = {
      "top_batsman": {
        "name": "Faf du Plessis",
        "points": ""
      },
      "top_bowler": {
        "name": "Sandeep Sharma",
        "points": ""
      }
    }
    if (this.matchResult) {
      console.log(this.matchResult);
      this.matchResult.Innings1[0].Batsman.find(x => {
        if (x.name === predictionInnings1.top_batsman.name.trim()) {
          if (x.runs < 50) {
            predictionInnings1.top_batsman.points = x.runs
          } else if (x.runs >= 50 && x.runs < 100) {
            predictionInnings1.top_batsman.points = String(Number(x.runs) + 5)
          } else {
            predictionInnings1.top_batsman.points = String(Number(x.runs) + 10)
          }
        }
      })

      this.matchResult.Innings1[1].Bowlers.find(x => {
        if (x.name === predictionInnings1.top_bowler.name.trim()) {
          predictionInnings1.top_bowler.points = String(Number(x.wicket) * 20 + Number(x.maidens) * 5)
          if (x.economy <= 6.50) {
            predictionInnings1.top_bowler.points = String(Number(predictionInnings1.top_bowler.points) + 10)
          } else if (x.economy >= 11) {
            predictionInnings1.top_bowler.points = String(Number(predictionInnings1.top_bowler.points) - 5)
          } else {
            predictionInnings1.top_bowler.points = String(Number(predictionInnings1.top_bowler.points) + 5)
          }
        }
      })

      this.matchResult.Innings2[0].Batsman.find(x => {
        if (x.name === predictionInnings2.top_batsman.name.trim()) {
          if (x.runs < 50) {
            predictionInnings2.top_batsman.points = x.runs
          } else if (x.runs >= 50 && x.runs < 100) {
            predictionInnings2.top_batsman.points = String(Number(x.runs) + 5)
          } else {
            predictionInnings2.top_batsman.points = String(Number(x.runs) + 10)
          }
        }
      })

      this.matchResult.Innings2[1].Bowlers.find(x => {
        if (x.name === predictionInnings2.top_bowler.name.trim()) {
          console.log(Number(x.wicket) * 20);
          predictionInnings2.top_bowler.points = String(Number(x.wicket) * 20 + Number(x.maidens) * 5)
          if (x.economy <= 6.50) {
            predictionInnings2.top_bowler.points = String(Number(predictionInnings2.top_bowler.points) + 10)
          } else if (x.economy >= 11) {
            predictionInnings2.top_bowler.points = String(Number(predictionInnings2.top_bowler.points) - 5)
          } else {
            predictionInnings2.top_bowler.points = String(Number(predictionInnings2.top_bowler.points) + 5)
          }
        }
      })
      console.log(predictionInnings1);
      console.log(predictionInnings2);
      totalPoints = String(Number(predictionInnings1.top_batsman.points) + Number(predictionInnings1.top_bowler.points) + Number(predictionInnings2.top_batsman.points) + Number(predictionInnings2.top_bowler.points))
      if (result.name === this.matchResult.result.winning_team) {
        totalPoints = String(Number(totalPoints) + 50)
      }
      if (result.name === this.matchResult.result.winning_team) {
        totalPoints = String(Number(totalPoints) + 50)
      }
      console.log(totalPoints);
    }

  }

}
