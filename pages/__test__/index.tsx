import React from 'react';
import Charts from '@components/charts/Charts';
import getChartOption from '@components/charts/composables/Charts_Options';

function ChartTest() {
  return <Charts option={getChartOption('')} />;
}

export default ChartTest;
