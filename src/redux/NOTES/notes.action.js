import { ADDNOTES, DELETENOTES, ERROR, GETNOTES, LOADING, UPDATENOTES } from "./notes.actiontype";
import { addapi, deleteapi, getapi, updateapi } from "./notes.api";
export const getFun=()=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await getapi()
        dispatch({type:GETNOTES,payload:data.data})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}
export const addFun=(notes)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await addapi(notes)
        console.log('data:', data)
        dispatch({type:ADDNOTES,payload:data.data})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}
export const updateFun=(id,payload)=>async(dispatch)=>{
    console.log('payload:', payload)
    dispatch({type:LOADING});
    try {
        let data=await updateapi(id,payload)
        data=data.data
        console.log('data:', data)
        let obj={
            id:id,
            payload:payload
        }
        dispatch({type:UPDATENOTES, payload: obj})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}
export const deleteFun=(id)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await deleteapi(id)
        dispatch({type:DELETENOTES,payload:id})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}