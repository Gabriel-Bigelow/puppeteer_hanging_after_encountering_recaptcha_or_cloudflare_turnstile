const puppeteer = require("puppeteer");

const checkIfPuppeteerHangs = async () => {
	console.log("connecting to puppeteer");
	console.log("trying to connect to browser");
	const browser = await puppeteer.connect({
		browserURL: "http://127.0.0.1:9222/json/version",
	});
	console.log("trying to open a new page");
	const page = await browser.newPage();

	console.log("getting existing pages");
	console.log(await browser.pages());

	console.log("We didn't get stuck. Disconnecting from old browser");
	await browser.disconnect();
	console.log("trying to connect to newBrowser");
	const newBrowser = await puppeteer.connect({
		browserURL: "http://127.0.0.1:9222/json/version",
	});
	console.log("connected to newBrowser. Getting pages...");
	const pages = await newBrowser.pages();
	console.log(pages);
};
checkIfPuppeteerHangs();
