import React from 'react'
import Navbar from '../../tool/navbar/Navbar'
import Barner from './barner/Barner'
import Create from './create/Create'
import Partner from './partner/Pratner'
import Photograph from './photograph/Photograph'
import Question from './question/Question'
import Line from './Line/Line'
import Footer from '../../tool/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Barner />
        <Line />
        <Create />
        <Line />
        <Partner />
        <Line />
        <Photograph />
        <Line />
        <Question />
        <Line />
        <Footer />
        <Line />
    </div>
  )
}

export default Home