import React, { useState, useMemo } from 'react'
import { useScounter } from '../../hooks/useScounter'
import '../02-useEffect/effect.css'
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const {counter, increment} = useScounter(100);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(()=>procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{ memoProcesoPesado }</p>
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
