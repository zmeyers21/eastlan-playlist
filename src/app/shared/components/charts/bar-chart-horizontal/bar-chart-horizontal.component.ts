import { Component, Input } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart-horizontal',
  templateUrl: './bar-chart-horizontal.component.html',
  styleUrls: ['./bar-chart-horizontal.component.scss']
})
export class BarChartHorizontalComponent {

  // data
  @Input() data: any[];

  // options
  @Input() legendTitle = 'FIX ME';
  legendPosition: LegendPosition = LegendPosition.Below; // ['right', 'below']
  legend = false;
  // view: [number, number] = [528, 320];
  view: any;

  xAxis = true;
  yAxis = true;

  @Input() yAxisLabel = 'FIX ME';
  @Input() xAxisLabel = 'FIX ME';
  showXAxisLabel = true;
  showYAxisLabel = true;

  maxXAxisTickLength = 30;
  maxYAxisTickLength = 30;
  trimXAxisTicks = false;
  trimYAxisTicks = false;
  rotateXAxisTicks = true;

  xAxisTicks: any[] = []
  yAxisTicks: any[] = [0, 25, 50, 75, 100, 125, 150, 175, 200]

  animations = true; // animations on load
  showGridLines = true; // grid lines
  showDataLabel = false; // numbers on bars
  gradient = false;
  colorScheme: Color = {
    name: 'Schem 1',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  schemeType: ScaleType = ScaleType.Ordinal; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book']
  barPadding = 12
  tooltipDisabled = false;

  yScaleMax = 9000;

  roundEdges = true;

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
