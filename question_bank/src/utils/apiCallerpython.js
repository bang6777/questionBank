
import api from './axiospy';
export default async function callAPI(endpoint,method,data){
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
