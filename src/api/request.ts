import axios from 'axios'
import { HelperConstanta } from '../helper/constanta';
interface configProps {
    method: 'get' | 'put' | 'delete' | 'post'
    url: string
    params?: any,
    data?: any,
    cancelToken?: any,
    contentType: 'application/json' | 'application/xml'
}
async function request(config:configProps){
    try {
        let token = localStorage.getItem(HelperConstanta.jwt_token) || ""
        const response = await axios({
            baseURL: HelperConstanta.BASE_URL,
            headers: {
                'Content-Type': config.contentType,
                'token': token
            },
            ...config
        });
        return await Promise.resolve(response.data);
    } catch (err:any) {
        return await Promise.reject(err.response.data)
    }
}

export default request