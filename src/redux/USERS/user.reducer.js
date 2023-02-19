import { login, register, userError } from "./user.actiontype";
let init={
    isAuth:false,
    token:"",
    loading:false,
    error:false
}
export const authReducer=(state=init,action)=>{
    const {payload,type}=action;
    switch(type){
        case register:{
            return {...state,isAuth:false,loading:false,error:false}
        }
        case login:{
            return {...state,isAuth:true,token:payload,loading:false,error:false}
        }
        case userError:{
            return {...state,isAuth:false,loading:false,error:true}
        }
        default:{
            return state
        }
    }
}
// --------------------------