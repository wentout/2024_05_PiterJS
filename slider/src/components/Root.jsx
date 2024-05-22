import React from 'react';
import { ThemeUIProvider } from 'theme-ui';
import { dark } from '@theme-ui/presets';

const Root = function () {
	// eslint-disable-next-line @typescript-eslint/no-this-alias
	const app = this;
	
	const {
		slides,
		counters
	} = app;
	
	const {
		current,
	} = slides;
	
	const {
		view
	} = current;
	
	const slide = new app[view]();
	this.SlideView = slide.View;
	
	this.footer = new slide.Footer(counters);
	this.FooterView = this.footer.View;

};

Root.prototype.View = function () {
	
	const {
		SlideView
	} = this;
	
	
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

export default Root;