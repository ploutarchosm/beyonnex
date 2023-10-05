import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetTemperatureComponent } from '@app/target-temperature/target-temperature.component';

describe('TargetTemperatureComponent', () => {
  let component: TargetTemperatureComponent;
  let fixture: ComponentFixture<TargetTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetTemperatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
