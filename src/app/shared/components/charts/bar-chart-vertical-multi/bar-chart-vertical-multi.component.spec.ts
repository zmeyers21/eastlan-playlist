import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartVerticalMultiComponent } from './bar-chart-vertical-multi.component';

describe('BarChartVerticalMultiComponent', () => {
  let component: BarChartVerticalMultiComponent;
  let fixture: ComponentFixture<BarChartVerticalMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartVerticalMultiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartVerticalMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
