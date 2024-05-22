import React from 'react';
import { ThemeUIProvider } from 'theme-ui';
import { dark } from '@theme-ui/presets';

const Slide = function () {
	// eslint-disable-next-line @typescript-eslint/no-this-alias
	const slide = this;

	if (this.failConstructorItself) {
		// debugger;
		throw new Error(`some ${this.constructor.name} fail`);
	}

	const {
		slides,
		counters
	} = slide;

	const {
		current,
	} = slides;

	const {
		view,
		snowflakes,
		// snowflakesRed,
	} = current;

	if (slide[view] instanceof Function) {
		const slideRenderer = new slide[view]();
		this.SlideView = slideRenderer.View.bind(slideRenderer);

		if (slideRenderer.Footer instanceof Function) {
			this.footer = new slideRenderer.Footer(counters);
			this.FooterView = this.footer.View.bind(this.footer);
		}

		if (slideRenderer.Progressor instanceof Function) {
			this.progressor = new slideRenderer.Progressor();
			this.ProgressorView = this.progressor.View.bind(this.progressor);
		}
		if (!snowflakes) {
			this.stopSnowflakes();
		}
		if (snowflakes) {
			this.startSnowflakes();
		}
	}
	// if (!snowflakesRed) {
	// 	// debugger;
	// 	this.stopSnowflakesRed();
	// }
	// if (snowflakesRed) {
	// 	// debugger;
	// 	this.startSnowflakesRed();
	// }
};

Slide.prototype.View = function () {
	// eslint-disable-next-line @typescript-eslint/no-this-alias
	const app = this;
	const {
		SlideView
	} = app;


	this.reactRoot.render(
		<React.StrictMode>
			<ThemeUIProvider theme={dark}>
				<div className="Slide" >
					<SlideView />
				</div>
			</ThemeUIProvider>
		</React.StrictMode>,
	);

};

export default Slide;