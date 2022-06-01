export type ChartTypeOptionValue =
  | 'days'
  | 'weekends'
  | 'months'
  | 'three-months';

export interface Graph {
  count: number;
  graphScores: GraphScore[];
}

export interface GraphScore {
  graphScore: number;
  scoreGap: number;
  scoreGapPercent: number;
  webtoonId: number;
  snapshotTime: string; //'2022-05-28T14:00:45';
  status: string;
  graphStatusDescription: string;
}

export interface ChartData {
  label: ChartTypeOptionValue;
  timeseries: Record<string, number>;
}

export interface ChartProps<SubOption extends string> {
  chartOptions: ChartOptions<MainOption, SubOption>;
  getChartData: (
    selectedSubOptions: any,
    config: {
      shouldInvalidate: boolean;
    },
  ) => Promise<ChartData>;
  forceUpdate?: any;
}
