import React, { useRef, useLayoutEffect } from 'react'
import './layout.css'
import { useFetch } from '../../hooks/useFetch'
import { useScounter } from '../../hooks/useScounter'

export const Layout = () => {

    const { counter, increment} = useScounter(1)

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    // console.log(data);
    const {quote} = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
    //    console.log('Holis');
    console.log(pTag.current.getBoundingClientRect());
    },[quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
                <blockquote className="blockquote text-right">
                    <p 
                    ref={pTag}
                    className="mb-0">{quote}</p>
                </blockquote>   
            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}
