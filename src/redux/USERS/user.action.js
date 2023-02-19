import { login, register, userError } from "./user.actiontype"
import { loginapi, registerapi } from "./user.api";

export const registerFun=(registerData)=>async(dispatch)=>{
    // console.log('registerData:', registerData)
    try {
        let data = await registerapi(registerData)
        dispatch({type:register})
    } catch (err){
        console.log(err)
        dispatch({type:userError})
    }
}
export const loginFun=(loginData)=>async(dispatch)=>{
    try {
        let  data = await loginapi(loginData)
        localStorage.setItem("token",data.data.token)
        dispatch({type:login,payload:data.data.token})
    } catch (err){
        console.log(err)
        dispatch({type:userError})
    }
}