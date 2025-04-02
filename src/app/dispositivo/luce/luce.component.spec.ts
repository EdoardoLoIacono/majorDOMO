import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuceComponent } from './luce.component';

describe('LuceComponent', () => {
  let component: LuceComponent;
  let fixture: ComponentFixture<LuceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), LuceComponent]
}).compileComponents();

    fixture = TestBed.createComponent(LuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
