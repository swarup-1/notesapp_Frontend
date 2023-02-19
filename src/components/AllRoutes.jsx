import React from 'react'
import {Route, Routes} from "react-router-dom";
import Authenticate from '../pages/Authenticate';
import Notespage from '../pages/Notespage';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <Notespage />
              </PrivateRoute>
            } />
            <Route path="/auth" element={<Authenticate />} />
        </Routes>
    </div>
  )
}

export default AllRoutes