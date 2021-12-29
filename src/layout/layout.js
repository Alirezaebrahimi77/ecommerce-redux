import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from "../components/Footer/Footer"
import "./layout.css"

const layout = ({children}) => {
    return (
        <div>
            <Nav />
        <main>
            {children}
        </main>

        <Footer />
        </div>
    )
}

export default layout
