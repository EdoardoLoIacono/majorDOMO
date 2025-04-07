import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatistichePage } from './statistiche.page';

describe('StatistichePage', () => {
  let component: StatistichePage;
  let fixture: ComponentFixture<StatistichePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
