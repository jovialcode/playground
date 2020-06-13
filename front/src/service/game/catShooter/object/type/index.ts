export * from './Enemy'; //레이아웃 타입정의

export type IMAGE_CONFIG = {
    width : number,
    height : number,
    tint? : string | undefined;
}

export enum SPEED_ENUM{
    level1 = 10,
    level2 = 20,
    level3 = 30,
    level4 = 40,
    level5 = 50,
}