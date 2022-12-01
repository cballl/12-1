import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    // timeout: 10000,
});

instance.interceptors.request.use(
    (res) => {
        return res
    },
    (err) => {
        console.log(err)
    }
)

instance.interceptors.response.use(
    (res) => {
        return res.data
    }
)




export {
    instance
}