import {action} from "mobx";
import UserRepository from "../repository/UserRepository";

export default class UserModel{
    private _id : string | null;

    constructor() {
        this._id = null;
    }

    @action
    login(id: string, password: string){
        (async () => {
            try{
                const rs = await UserRepository.login(id, password);
                const data = rs.data;

            }catch (e) {

                console.log(e);
            }
        })();
    }
}