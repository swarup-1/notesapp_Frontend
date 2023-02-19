import { Box, Button, Input, Text, Textarea, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFun, deleteFun, getFun, updateFun } from '../redux/NOTES/notes.action';

const Notespage = () => {
  const store=useSelector((state)=>state.noteReducer  );
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getFun())
  },[])
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const createNote=(e)=>{
    e.preventDefault()
      if(title!="" && body!=""){
        let obj={
          title,
          body
        }
        dispatch(addFun(obj))
        setTitle("")
        setBody("")
      }
    }
    const [isUpdate,setIsUpdate] = useState(false)
    const [upTitle,setUpTitle] = useState("")
    const [upBody,setUpBody] = useState("")
    const handleUpdate=(id)=>{
      if(upTitle!="" && upBody!=""){
        dispatch(updateFun(id,{title:upTitle,body:upBody}))
      }else if(upTitle!="" && upBody==""){
        dispatch(updateFun(id,{title:upTitle}))
      }else if(upTitle=="" && upBody!=""){
        dispatch(updateFun(id,{body:upBody}))
      }
        setIsUpdate(false)
        setTitle("")
        setBody("")
    }

  return (
    <Box >
      <Box width="70%" border="2px solid gray" p="20px" margin="auto" marginTop="20px">
        <form onSubmit={createNote} style={{margin:"auto"}}>
            Create Note
            <Input name="title" value={title} type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='Title'  />
            <Textarea  name="body" value={body} type="text" onChange={(e)=>setBody(e.target.value)} placeholder='Describe it'  />
            <Button type="submit" colorScheme='teal' >Submit</Button>
        </form>
          {isUpdate?<Box marginTop="20px">
              <Text color="blue" fontWeight="700" fontSize="15px" >You can Update any fields ={">"} No need to fill all below</Text>
              <Input name="title" type="text" onChange={(e)=>setUpTitle(e.target.value)} placeholder='Update Title'  />
              <Textarea  name="body" type="text" onChange={(e)=>setUpBody(e.target.value)} placeholder='Update Describe it'  />
            </Box>:null
          }
          </Box>
        <Wrap width="70%" border="2px solid gray" p="20px" margin="auto" marginTop="20px" >
          {store.notes&&store.notes.map((el)=>(
            <Box border="1px solid blue" p="25px 15px" key={el._id}>
              <Text>Title : {el.title}</Text>
              <Text>Description : {el.body}</Text>
              <Button onClick={()=>{isUpdate?handleUpdate(el._id):setIsUpdate(true)}} colorScheme='purple' variant='ghost' border="1px solid purple" >{isUpdate?"Change":"Update"}</Button>
              <Button onClick={()=>dispatch(deleteFun(el._id))} colorScheme='red' variant='ghost' border="1px solid gray" >Delete</Button>
          </Box>
          ))}
        </Wrap>
    </Box>
  )
}

export default Notespage