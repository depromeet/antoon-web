import React from "react";
import ReactECharts, { ReactEChartsProps } from "./composables/Chart_Options";
import { ChartContainer } from "./composables/Charts.style";

const Charts = ({ option, style }: ReactEChartsProps) => {
  return (
    <ChartContainer>    
      <ReactECharts
        option={option}
        style={style}
        theme='chalk'
      />
    </ChartContainer>
  );
}

export default Charts;