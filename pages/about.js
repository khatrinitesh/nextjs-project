import React,{useState} from 'react';
import { useRouter } from 'next/router'

export default function About() {

  const [count,setCount] = useState(0);
  const [toggle,setToggle] = useState(false)

  const router = useRouter();

  function handleClick(){
    router.push('/')
  }

  function handleClickOne(){
    router.push('/contact')
  }

  const btnInc= ()=> {
    setCount(prevC => prevC + 1)
  }
  const btnDec= ()=> {
    setCount(prevC => prevC - 1)
  }
  const btnRes= ()=> {
    setCount(0)
  }

  const btnToggle= () => {
    setToggle(!toggle)
  }
  return (
    <div>
      About
      <button className='btn btn-primary' onClick={handleClick}>Click 1</button>
      <button className='btn btn-primary' onClick={handleClickOne}>Click 2</button>

      <div>
        <h2>Counter - {count}</h2>
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnRes}>Reset</button>
      </div>
      <div>
        <h2>Conditional Rendering</h2>
        <button onClick={btnToggle}>{toggle ? 'yes' : 'no'}</button>
        {toggle ? <Nitesh/> : <Sameet/>}
      </div>
    </div>
  )
}

function Nitesh(){
  return(
    <>
    Nitesh</>
  )
}

function Sameet(){
  return(
    <>
    Sameet</>
  )
}
