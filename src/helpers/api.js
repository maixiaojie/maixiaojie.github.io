import {
    EventEmitter
} from 'events'
import Vue from 'vue'

const api = new EventEmitter()
let listCache='';
const baseUrl = 'https://zz.mcust.cn/apis/'
api.ZlList = function() {
    return new Promise((resolve, reject) => {
        if(listCache!=''){
            resolve(listCache);
        }
        Vue.http.get(baseUrl+'zl').then(
            (response) => {
                listCache=response.body;
                resolve(response.body);
            }, reject
        );
    });
}

export {
    api
}