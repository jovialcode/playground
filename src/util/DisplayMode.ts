import {DISPLAY_MODE_TYPE, DISPLAY_MODE} from "@type";
import {Color} from "@lib";

export const modeChange = (type : DISPLAY_MODE_TYPE) : void => {
	//root
	const app = document.getElementById("app");
	const buttons = document.getElementsByTagName('button');
	const as = document.getElementsByTagName('a');

	let changeArray: Array<any> = [];
	changeArray = Array.from(as).concat(Array.from(buttons) as Array<any>);

	if(!app) return;

	//TODO 색상 config 같은거 정하면 어떻까?
	switch (type) {
		case DISPLAY_MODE.BLACK : {
			app.style.background = Color.BLACK;
			app.style.color = Color.WHITE;

			changeArray.forEach(function (item) {
				item.style.color = Color.WHITE
			});

			break;
		}
		default:{
			app.style.background = 'transparent';
			app.style.color = Color.BLACK;

			changeArray.forEach(function (item) {
				item.style.color = Color.BLACK
			});
		}
	}
};
