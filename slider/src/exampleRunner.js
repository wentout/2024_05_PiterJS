import $ from "jquery";
window.$ = $;
window.runExample = async function (path) {
	const fetched = await fetch(`../2024_05_PiterJS/examples/${path}.js`, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
	const src = await fetched.text();
	eval(src);
};
