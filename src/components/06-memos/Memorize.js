import React, { useState } from 'react'
import '../02-useEffect/effect.css'
import { useScounter } from '../../hooks/useScounter'
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useScounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter <Small value={counter} /> </h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                1 +    
            </button>  

            <button
                className="btn btn-success ml-3"
                onClick={()=>{
                    setShow(!show);
                }}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
