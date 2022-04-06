import React, { useRef, useEffect } from "react";
import { init, getInstanceByDom, registerTheme, use, ComposeOption, BarSeriesOption, TitleComponentOption } from "echarts";
import type { CSSProperties } from "react";
import type { ECharts, SetOptionOpts } from "echarts";
import type {LineSeriesOption } from "echarts/charts";
import chalkTheme from './Chart_Style.json';

export type ChartThemeType = 
  | "light"
  | "dark"
  | "chalk"

export type EChartsOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
>;

export interface ChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: ChartThemeType;
}

const ReactECharts: React.FC<ChartsProps> = ({
  option,
  style,
  theme,
  settings,
  loading,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    let chart: ECharts | undefined;

    if (chartRef.current !== null) {
      registerTheme('chalk', chalkTheme);
      chart = init(chartRef.current, theme);
    }

    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading, theme]);

  return (
    <div 
      className="ec-panel" 
      ref={chartRef} 
      style={{ width: "100%",height: "100%", ...style }} 
    />
  );
}

export default ReactECharts;

