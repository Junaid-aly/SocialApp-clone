import React from 'react'
import Navbar from '../components/Navbar'
import LeftBar from '../components/Leftbar'
import Middlebar from '../components/MiddleBar'
import Rightbar from '../components/RightBar'
import  "../../src/App.css"
const Home = () => {
  return (
    <>
         <div className='body'> 
      <Navbar/>
        <div className="container-fuild">
      <main>
          <LeftBar/>
        <div className="container">
    
          <Middlebar/>

        </div>
        <Rightbar/>
      </main>
        </div>
    </div>

    </>
  )
}

export default Home
