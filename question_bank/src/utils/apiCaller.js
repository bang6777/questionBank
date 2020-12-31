import api from './axios';
import api1 from './axiospy';
export default async function CallApi(endpoint,method,data){
    try {
        return await api({
            method: method,
            url: `/${endpoint}`,
            data: data
        });
    } catch (error) {
        console.log(error);
    }
}
