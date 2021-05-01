import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPredictionsComponent } from './match-predictions.component';

describe('MatchPredictionsComponent', () => {
  let component: MatchPredictionsComponent;
  let fixture: ComponentFixture<MatchPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPredictionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
