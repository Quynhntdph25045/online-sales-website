import axios from "axios";

const inst = axios.create(
    {baseURL: 'http://localhost:3000'}
)
export default inst