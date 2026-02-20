// ==UserScript==
// @name         LPDD Stat Simplifier
// @namespace    http://tampermonkey.net/
// @version      2026-02-20
// @description  Simplify LPDD stats view
// @author       SrVariable
// @match        https://lapalabradeldia.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lapalabradeldia.com
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const observer = new MutationObserver(() => {
		const styles = getComputedStyle(document.body);
		if (styles.pointerEvents === "none") {
			const div = document.querySelector("div.prose");
			if (div) {
				div.removeChild(div.childNodes[1])
				div.removeChild(div.childNodes[1])
			}
		}
	});

	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ['style'],
	});
})();
