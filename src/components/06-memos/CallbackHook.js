import React from 'react'
import '../02-useEffect/effect.css'
import { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
// cuando necesitamos enviar una funcion a un componete hijo
    const [counter, setCounter] = useState(10);
    
    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( (num) => {
            setCounter(c => c + num)
        },[setCounter])

    return (
        <div>
            <h1>use Callback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}
