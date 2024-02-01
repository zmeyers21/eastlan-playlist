import { Component, Input, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart-horizontal',
  templateUrl: './bar-chart-horizontal.component.html',
  styleUrls: ['./bar-chart-horizontal.component.scss']
})
export class BarChartHorizontalComponent implements OnInit {

  // data
  @Input() data: any[];

  // options
  @Input() legendTitle: string = 'FIX ME';
  legendPosition: LegendPosition = LegendPosition.Below; // ['right', 'below']
  legend: boolean = false;
  // view: [number, number] = [528, 320];
  view: any;

  xAxis: boolean = true;
  yAxis: boolean = true;

  @Input() yAxisLabel: string = 'FIX ME';
  @Input() xAxisLabel: string = 'FIX ME';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = true;

  xAxisTicks: any[] = []
  yAxisTicks: any[] = [0, 25, 50, 75, 100, 125, 150, 175, 200]

  animations: boolean = true; // animations on load
  showGridLines: boolean = true; // grid lines
  showDataLabel: boolean = false; // numbers on bars
  gradient: boolean = false;
  colorScheme: Color = {
    name: 'Schem 1',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  schemeType: ScaleType = ScaleType.Ordinal; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book']
  barPadding: number = 12
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = true;

  constructor() {  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }

}
