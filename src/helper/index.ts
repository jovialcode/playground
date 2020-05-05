import {DISPLAY_MODE_TYPE, DISPLAY_MODE} from "../type";

export const modeChange = (type : DISPLAY_MODE_TYPE) : void => {
	//root
	const app = document.getElementById("app");
	const buttons = document.getElementsByTagName('button');
	const as = document.getElementsByTagName('a');

	let changeArray: Array<any> = [];
	changeArray = Array.from(as).concat(Array.from(buttons));

	if(!app) return;

	//TODO 색상 config 같은거 정하면 어떻까?
	switch (type) {
		case DISPLAY_MODE.BLACK : {
			app.style.background = '#000000';
			app.style.color = '#ffffff';

			changeArray.forEach(function (item) {
				item.style.color = '#ffffff'
			});

			break;
		}
		default:{
			app.style.background = 'transparent';
			app.style.color = '#000000';

			changeArray.forEach(function (item) {
				item.style.color = '#000000'
			});
		}
	}

	

};