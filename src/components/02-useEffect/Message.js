import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y} = coords;

    useEffect(() => {
        // console.log('Componente montado')

        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y}
            setCoords(coords)
            // console.log(coords);
            // console.log(':D');
        }

        window.addEventListener('mouseover', mouseMove);

        return () => {
        console.log('Componente desmontado')
        window.removeEventListener('mouseover', mouseMove);    
        }
    }, [])

    return (
        <div>
            <h3>Perros</h3>
            <p>
                X: {x} Y:{y}
            </p>
        </div>
    )
}
