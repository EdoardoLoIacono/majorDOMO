import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DispositiviPage } from './dispositivi.page';

describe('DispositiviPage', () => {
  let component: DispositiviPage;
  let fixture: ComponentFixture<DispositiviPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositiviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
