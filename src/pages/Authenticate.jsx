import React, { useState } from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { loginFun, registerFun } from '../redux/USERS/user.action';

const Authenticate = () => {
    const store=useSelector((state)=>state.authReducer);
    console.log(store.isAuth)
    const dispatch=useDispatch()

    const [registered, setRegistered] = useState(false)
    const registerState={
        name:"",
        email:"",
        password:""
    }
    const loginState={
        email:"",
        password:""
    }
    const [register,setRegister]=useState(registerState)
    const [login,setLogin]=useState(loginState)
    
    const handleRegister=(e)=>{
        setRegister({...register, [e.target.name]: e.target.value })
    }
    const handleLogin=(e)=>{
        setLogin({...login, [e.target.name]: e.target.value })
    }
    const submitRegister=(e)=>{
        if(register!=registerState){
            dispatch(registerFun(register))
            setRegister(registerState)
            setRegistered(true)
        }
        e.preventDefault()
    }
    const submitLogin=(e)=>{
        e.preventDefault()
        if(login!=loginState){
            dispatch(loginFun(login))
            setLogin(loginState)
        }
    }


  return (
    <Box display="flex" justifyContent="space-around" >
        <form onSubmit={submitRegister} style={{width:"30%"}}>
            <p style={{fontWeight:700, fontSize:"20px"}}>Register</p>
            <Input name="name" type="text" onChange={handleRegister} placeholder='Your Name'  />
            <Input name="email" type="text" onChange={handleRegister} placeholder='Your Email'  />
            <Input name="password" type="text" onChange={handleRegister} placeholder='Your Password'  />
            <Button type="submit" colorScheme='teal' >Register</Button>
            { registered ?<p style={{color:"blue"}}>Now Please Login 👉</p>:<p style={{color:"red"}}>If you don't have an account please Register..</p>}
        </form>
        <form onSubmit={submitLogin} style={{width:"30%"}}>
            <p style={{fontWeight:700, fontSize:"20px"}}>Login</p>
            <Input name="email" type="text" onChange={handleLogin} placeholder='Your Email'  />
            <Input name="password" type="text" onChange={handleLogin} placeholder='Your Password'  />
            <Button type="submit" colorScheme='teal' >Login</Button>
            { store.isAuth ?<p style={{color:"blue"}}>Login Scuccess</p>:<p style={{color:"blue"}}>have an account Login here..</p>}
        </form>
    </Box>
  )
}

export default Authenticate