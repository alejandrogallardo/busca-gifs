import React from 'react'
import '../01-useState/counter.css'
import { useFetch } from '../../hooks/useFetch'
import { useScounter } from '../../hooks/useScounter'

export const MultipleCustomHooks = () => {

    const { counter, increment} = useScounter(1)

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    // console.log(data);
    const {author, quote} = !!data && data[0];


    return (
        <div>
            <h1>Custom Hooks</h1>
            <hr/>

            {
                loading
                ?
                    (
                    <div className="alert alert-info text-center">
                        loading...
                    </div>
                    )
                :
                    (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                    )
            }

            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}
