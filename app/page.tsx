'use client'
import {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0)
  const addCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 onClick={addCount} className="justify-center cursor-pointer">
          Increase Counter
        </h1>
        <p>
          Button has been clicked {count} times
        </p>
    </div>
  );
}
