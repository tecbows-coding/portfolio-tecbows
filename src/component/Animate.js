import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';

const Animate = () => {
    const location = useLocation()
    return (
        <AnimatePresence location={location}>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Animate