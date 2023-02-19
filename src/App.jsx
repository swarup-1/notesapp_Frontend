import { Box } from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'

function App() {

  return (
    <Box width="100%" className="App">
      <Navbar />
      <AllRoutes />
    </Box>
  )
}

export default App
