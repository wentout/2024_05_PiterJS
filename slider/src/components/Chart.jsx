import React from 'react';
import tree from './Chart/tree';
import pie from './Chart/pie';

const charts = {
	tree,
	pie,
};

const chart = function (scope) {

	const children = scope.collectTypes();

	const Chart = function (props) {

		const {
			id,
			opts,
		} = props;

		const {
			chart
		} = opts;

		chart.chartData = children[0];
		chart.print = scope.print;

		const appendSVG = function (chartRoot) {
			const chartSVG = charts[chart.type](chart);
			if (chartRoot) {
				chartRoot.append(chartSVG);
			}
		};

		return (<div ref={appendSVG} id={id} className='Chart'>{opts.title}</div>);
	};

	return Chart;
};

export default chart;