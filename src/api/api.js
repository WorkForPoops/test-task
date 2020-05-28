import * as axios from 'axios';

export const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://atc.lider-cc.ru/api/',
});


export const authAPI = {
    me() {
        return instance.get('cards_list?id=1&redactor=admin&page=1&offset=5')
    },
    login(username, password) {
        return instance.post('login', JSON.parse(JSON.stringify({ "username": username,"password": password })))
    }
}