import axios from "axios";
import {BASE_SERVER_URL} from "../utils/constants";

const sendMessage = (data) => {
    return axios({
        method: 'POST',
        baseURL: BASE_SERVER_URL,
        params: `/applications`,
        data
    })
}
export const CONTACT_API = {sendMessage};