import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartHorizontalMultiComponent } from './bar-chart-horizontal-multi.component';

describe('BarChartHorizontalMultiComponent', () => {
  let component: BarChartHorizontalMultiComponent;
  let fixture: ComponentFixture<BarChartHorizontalMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartHorizontalMultiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartHorizontalMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
