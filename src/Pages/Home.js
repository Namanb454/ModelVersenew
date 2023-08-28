import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Main from '../components/Main'

function Home() {
    return (
        <div>
            <div className='lg:w-full hidden'>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                <Main />
            </div>
        </div>
    )
}

export default Home
