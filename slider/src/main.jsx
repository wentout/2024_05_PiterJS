// import './index.css'
import './styles.css'

import { define, defaultNamespace } from 'mnemonica';

// @ts-expect-error no .dts
import { Slide, Title, Title2, Starter, MDX, Footer, Progressor } from './components';

import Keys from './keyboard';

import Main from './runner';

import postHook from './postCreation';

// @ts-expect-error no .dts
defaultNamespace.registerHook('postCreation', postHook);

// eslint-disable-next-line react-refresh/only-export-components
const Runner = define(Main);

// eslint-disable-next-line react-refresh/only-export-components
const SlideRoot = Runner.define(Slide);

SlideRoot.define(Title);

// eslint-disable-next-line react-refresh/only-export-components
const SlideStarter = SlideRoot.define(Starter);
SlideStarter.define(Progressor);
SlideStarter.define(Footer);

// eslint-disable-next-line react-refresh/only-export-components
const SlideMDX = SlideRoot.define(MDX);
SlideMDX.define(Progressor);
SlideMDX.define(Footer);

const app = new Runner('root');
// // const app = new App('root');

window.onerror = function (...args) {
	// debugger;
	app.setErrored(...args);
};

app.init()
	.then(app.start)
	.then(() => {
		if (app.print) return;
		Keys.call(app);
		// new app.Keys();
	});