import { useState, useEffect, useRef } from "react"
// https://www.breakingbadapi.com/api/quotes/1 
// /api/quotes/1

export const useFetch = (url) => {

    const isMounted = useRef(true); //  evita un error al momento que se desmonta un componente antes de tiempo

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(()=>{
        return () => {isMounted.current = false} // Cuando se desmonta lo manda a false
    }, [])
    
    useEffect(()=>{

        setState({data:null, loading:true, error:null})
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setTimeout(()=>{
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data: data
                        })
                    } else {
                        console.log('Set state no se llamo');
                    }
                }, 4000);
            })
    },[url]);
    return state;
}

