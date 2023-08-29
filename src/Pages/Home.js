import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <div className=''>
                {/* <Header /> */}
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                <Main />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
