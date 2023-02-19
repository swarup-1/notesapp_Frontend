import axios from "axios"

export const registerapi = (payload)=>{
    return axios.post("https://fine-pear-codfish-cap.cyclic.app/users/register",payload)
}
export const loginapi = (payload)=>{
    return axios.post("https://fine-pear-codfish-cap.cyclic.app/users/login",payload)
}