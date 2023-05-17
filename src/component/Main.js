import React from 'react'
import { motion } from 'framer-motion'

const Main = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: "100%" }} exit={{ opacity: 0, transition: { duration: 0.5 } }} id="hero" class="d-flex flex-column justify-content-center align-items-center">
            <div class="hero-container">
                <h1>Tecbows Coding</h1>
                <p>I'm <span class="typed" >Developer</span></p>
            </div>
        </motion.section>
    )
}

export default Main