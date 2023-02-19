import axios from "axios"

export const getapi = ()=>{
    return axios.get("https://fine-pear-codfish-cap.cyclic.app/notes",{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}
export const addapi = (payload)=>{
    return axios.post("https://fine-pear-codfish-cap.cyclic.app/notes/create",payload,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    })
}
export const updateapi = (id,payload)=>{
    return axios.patch(`https://fine-pear-codfish-cap.cyclic.app/notes/update/${id}`,payload,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    })
}
export const deleteapi = (id)=>{
    return axios.delete(`https://fine-pear-codfish-cap.cyclic.app/notes/delete/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    })
}