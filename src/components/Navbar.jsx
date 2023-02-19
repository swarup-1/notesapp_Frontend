import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="center" gap="40px" p="10px 0px" m="10px 0px 50px 0px" backgroundColor="blue.100" width="100%"  >
        <Link to="/">Notes</Link>
        <Link to="/auth">SignUp/Login</Link>

    </Box>
  )
}

export default Navbar