import axios from "./axios.custom";

const createUserAPI = (FullName,Email,Password,PhoneNumber) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
    //trường đặt bên BE   //Phần này tạo bên BE
        fullName        : FullName,
        email           : Email,
        password        : Password,
        phone           : PhoneNumber,
    }
   return axios.post(URL_BACKEND , data)
}

const updateUserAPI = () => {

}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user"
   
   return axios.get(URL_BACKEND)
}
export {
    createUserAPI,
    updateUserAPI,
    fetchAllUserAPI
}