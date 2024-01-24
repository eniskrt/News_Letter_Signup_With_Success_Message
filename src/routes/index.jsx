import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainCard from '../components/main-card/MainCard'
import SuccessCard from '../components/success-card/SuccessCard'
import { Container } from "react-bootstrap";

const AppRouter = () => {

    const [email, setEmail] = useState("")

  return (
    <BrowserRouter>
        <Container className="main-container">
            <Routes>
                <Route path='/' element={<MainCard setEmail={setEmail}/>}/>
                <Route path='/success' element={<SuccessCard email={email}/>}/>
            </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default AppRouter
