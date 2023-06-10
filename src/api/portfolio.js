import axios from "axios";
import {BASE_SERVER_URL} from "../utils/constants";

const getWorks = (data) => {
    return axios({
        method: 'POST',
        baseURL: BASE_SERVER_URL,
        params: `/works`,
        data
    })
}
export const PORTFOLIO_API = {getWorks};