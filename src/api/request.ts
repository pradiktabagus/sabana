import axios from 'axios'
import { HelperConstanta } from '../helper/constanta';
interface configProps {
    method: 'get' | 'put' | 'delete' | 'post'
    url: string
    params?: any,
    data?: any,
    cancelToken?: any,
}
async function request(config:configProps){
    try {
        const response = await axios({
            baseURL: HelperConstanta.BASE_URL,
            headers: { "content-type": "application/json", },
            ...config
        });
        return await Promise.resolve(response.data);
    } catch (err:any) {
        return await Promise.reject(err.response.data)
    }
}

export default request