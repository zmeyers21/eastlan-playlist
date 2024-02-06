export interface ChartData {
  name: string;
  value: number;
}

export interface ChartDataMulti {
  name: string;
  series: ChartData[];
}