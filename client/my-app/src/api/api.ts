import axios from "axios"

const URL = 'http://127.0.0.1:3000 '

export const data = axios.get(URL).then((response) => response.data).catch((response) => response)