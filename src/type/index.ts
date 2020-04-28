export type METHOD_TYPE =
	| 'get'
	| 'post';


export interface IMainRs {
	title : string;
	subTitle : string;
	keyword : string[];
	createDate : string;
	content : string;
}