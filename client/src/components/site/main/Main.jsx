import React, {useEffect, useState} from 'react'
import './Main.css'
import jwt_decode from "jwt-decode";
import {useNavigate } from 'react-router-dom'
import Navbar from '../../tool/navbar/Navbar'
import Barner from './barner/Barner'
import Item from './items/Items'


const Main = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  if(token){
    navigate('/main', { replace: true })
  }
  return (
    <div>
      <Navbar />
      <Barner />
      <Item />
    </div>
  )
}

export default Main