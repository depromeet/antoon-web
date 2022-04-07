import { ChartsProps } from './ECharts';
import { getChartToolBoxTooltip, getChartToolTip } from '../chart-utils';
import { DEFAULT_ICON_FILL } from '@constants/icon-constants';

export interface ChartData {
	data: Record<string, number>;
}

//데이터 값에 따라 처리(-ing)
const getChartOption = (data: any) => {
	console.log(data);
	return DefaultOption && setOption;
};

const DefaultOption: ChartsProps['option'] = {
	toolbox: {
		itemSize: 16,
		itemGap: 15,
		orient: 'horizontal',
		right: '16',
		top: '2',
		feature: {
			magicType: {
				type: ['line', 'bar'],
				title: {
					line: 'Line 차트',
					bar: 'bar차트',
				},
				option: {
					line: { xAxis: { boundaryGap: false } },
					bar: { xAxis: { boundaryGap: true } },
				},
			},
		},
		iconStyle: {
			borderColor: DEFAULT_ICON_FILL,
		},
		tooltip: {
			show: true,
			backgroundColor: 'white',
			formatter: (params: any) => getChartToolBoxTooltip(params),
			textStyle: {
				fontSize: 15,
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
				textShadowBlur: 30,
			},
		},
	},
	tooltip: {
		trigger: 'axis',
		textStyle: {
			fontSize: 15,
			fontFamily: 'sans-serif',
			fontWeight: 'normal',
			textShadowBlur: 30,
		},
		alwaysShowContent: true,
		formatter: (params: any) => getChartToolTip(params),
		axisPointer: {
			type: 'line',
			animation: true,
		},
	},
	legend: {
		data: ['Toon-Rate'],
		icon: 'rect',
		right: '1%',
		top: 'center',
		orient: 'vertical',
		padding: [5, 5, 5, 5],
		itemStyle: {
			opacity: 0.8,
		},
	},
	grid: {
		left: '10%',
		right: '10%',
		top: '10%',
		bottom: '10%',
	},
};

const setOption: ChartsProps['option'] = {
	title: {
		text: 'name',
		subtext: 'subTitle',
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,

		data: [
			'04.02',
			'04.03',
			'04.04',
			'04.05',
			'04.06',
			'04.07',
			'04.08',
			'04.09',
			'04.10',
		],
	},
	yAxis: {
		type: 'value',
	},
	series: [
		{
			name: 'Toon-Rate',
			data: [3.1, 2.6, 4.8, 4.9, 1.7, 8.0, 9.7, 5.7, 9.7],
			type: 'line',
			smooth: true,
			stack: 'x',
			areaStyle: {},
			markLine: {
				silent: false,
				precision: 1,
				lineStyle: {
					color: '#eee',
					type: 'dashed',
				},
				data: [
					{
						type: 'average',
						name: 'Avg',
					},
				],
			},
		},
	],
};

export default getChartOption;
