import {useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    const increase = () => {
        setCount(count+1);
    }

  return (
    <div>
        <h1>{ count }</h1>
        <button onClick={increase}>Decrease</button>
        <button onClick={() => setCount(count - 1)} >Increase</button>
        <button onClick={() => setCount(0)} >Reset</button>
    </div>
  )
}

export default Counter