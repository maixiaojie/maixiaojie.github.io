import {
    EventEmitter
} from 'events'
import Vue from 'vue'

const api = new EventEmitter()
let listCache='';
let itemCache = [];
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
api.AlList = function(id, order) {
    return new Promise((resolve, reject) => {       
        Vue.http.get(baseUrl + 'al/' + id+'/'+ order).then(
            (response) => {
                resolve(response.body);
            }, reject
        );
    });
}
api.articleDetail = function(id, order) {
    return new Promise((resolve, reject) => {       
        Vue.http.get(baseUrl + 'zl/detail/' + id+'/'+ order).then(
            (response) => {
                resolve(response.body);
            }, reject
        );
    });
}

export {
    api
}