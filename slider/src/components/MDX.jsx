import React from 'react';
import Prism from '@theme-ui/prism';
import chart from './Chart';

// import { Box, Heading, Donut, Container, Message, Embed, Link, Badge, Grid, AspectRatio } from 'theme-ui';
import { Box, Heading, Button } from 'theme-ui';

import { evaluateSync } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'


const MDX = function () {
	this.data = this.slides.current.data;
};

MDX.prototype.View = function () {

	// eslint-disable-next-line @typescript-eslint/no-this-alias
	const me = this;

	const {
		data,
		ProgressorView,
		FooterView,
		slides: {
			current
		}
	} = me;

	const app = function (proto) {
		const { key } = proto.slide;
		const split = key.split('.');
		const reducedData = split.reduce((answer, keyName) => {
			answer = answer[keyName];
			return answer;
		}, me);
		return `${reducedData}`;
	};
	
	const Chart = chart(me);

	const components = {
		code: Prism,
		Heading,
		Box,
		app,
		Chart,
		Button,
	};
	
	// const code = String(compileSync(data, { outputFormat: 'function-body' }));
	// const MDXContent = runSync(code, { ...runtime, baseUrl: import.meta.url });
	const MDXContent = (evaluateSync({
		path: 'runtime',
		value: data,
		jsxDEV: null
	}, {
		...runtime, baseUrl: import.meta.url
	})).default;

	// const scope = {
	// 	app: me,
	// 	timestamps: JSON.stringify(me.collectTimestamps(), null, '\t')
	// };

	// const MDXContent = Object.assign({}, data, { jsx });
	// const MDXContent = data;

	const classNames = current.contentClassNamesWrapper ? `SlideContent ${current.contentClassNamesWrapper}` : 'SlideContent';

	return (
		<div className="MDX">
			<ProgressorView />
			<div className={classNames}>
				<MDXContent components={components} />
			</div>
			<FooterView />
		</div>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default MDX;