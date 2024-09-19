import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  )
}

