import axios, {AxiosResponse} from 'axios';

import {METHOD, METHOD_TYPE} from "@type";
import {API_CONFIG} from "../config";


class UserRepository{
    private readonly _method : METHOD_TYPE;

    constructor() {
        this._method = METHOD.POST;
    }

    async login(id : string, password : string) : Promise<AxiosResponse<Boolean>>{
        return axios({
            url : `${API_CONFIG.AUTH_SERVER}/login/`,
            method: this._method,
            data : {
                id : id,
                password : password
            }
        });
    }
}

export default new UserRepository()
