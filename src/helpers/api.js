import {
    EventEmitter
} from 'events'
import Vue from 'vue'

const api = new EventEmitter()
let listCache='';
let articleListCache = [];
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
        if (articleListCache[id]) {
            console.log("bycache");
            resolve(articleListCache[id])
        } else {
            Vue.http.get(baseUrl + 'al/' + id+'/'+ order).then(
                (response) => {
                    articleListCache[id] = response.body;
                    resolve(articleListCache[id]);
                }, reject
            );
        }
    });
}

export {
    api
}