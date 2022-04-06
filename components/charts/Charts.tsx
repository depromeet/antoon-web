import React from "react";
import ReactECharts, { ChartsProps } from "./composables/ECharts";
import { ChartContainer } from "./composables/Charts.style";

const Charts = ({ option, style }: ChartsProps) => {
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