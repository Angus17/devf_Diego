import Song_List from '@/components/Song_List/Song_List'
import Song_Details from '@/components/Song_Details/Song_Details'
import './home.css'

import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='izquierdo'>
            <h2>Song List</h2>
            <Song_List />
        </div>

        <div className='derecho'>
            <h2>Lado derecho</h2>
            <Song_Details />
        </div>
    </div>
  )
}

export default Home