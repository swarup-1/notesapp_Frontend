import { ADDNOTES, DELETENOTES, ERROR, GETNOTES, LOADING, UPDATENOTES } from "./notes.actiontype";
let init={
    notes:[],
    loading:false,
    error:false
}
export const noteReducer=(state=init,action)=>{
    const {payload,type}=action;
    switch(type){
        case GETNOTES:{
            return {...state,notes:payload,loading:false,error:false}
        }
        case ADDNOTES:{
            return {...state,notes:[...state.notes,payload],loading:false,error:false}
        }
        case UPDATENOTES:{
            let data=state.notes.map((el)=>{
                if(el._id==payload.id){
                    console.log('Reducer payload:', payload.payload)
                    return {...el,...payload.payload}
                }
                return el
            })
            return {...state,notes:data,loading:false,error:false}
        }
        case DELETENOTES:{
            let data=state.notes.filter((el)=>{
                return el._id!==payload
            })
            return {...state,notes:data,loading:false,error:false}
        }
        case LOADING:{
            return {...state,loading:true,error:false}
        }
        case ERROR:{
            return {...state,loading:false,error:true}
        }
        default:{
            return state
        }
    }
}