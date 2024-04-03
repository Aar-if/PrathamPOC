import React from 'react'
import Sample from '../components/Sample'
import InputPage from './InputPage'
import DisplayPage from './DisplayPage'

function Home() {
  return (
    <>
    <h1>Welcome to HomePage</h1>
    <Sample />
    <h3>State Management with Zustand</h3>
    <InputPage />
    <DisplayPage />
    </>
  )
}

export default Home