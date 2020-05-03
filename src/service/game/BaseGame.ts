export default abstract class BaseGame{
    abstract config : any;

    create(){};
    preload(){};
};

export interface IGame{
    getConfig : () =>{}
}
