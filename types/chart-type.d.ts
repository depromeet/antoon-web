export type ChartTypeOptionValue = 'live' | 'daily' | 'weekly' | 'monthly';

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
