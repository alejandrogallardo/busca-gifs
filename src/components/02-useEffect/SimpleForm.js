import React, {useEffect, useState} from 'react'
import { Message } from './Message';
import './effect.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;
//  Para escuchar cambios especificos en alguna parte de la applicacion
    useEffect( () => {
        console.log('Holis');
    },[]);
    
    useEffect( () => {
        console.log('Form state cambio');
    },[formState]);
    
    useEffect( () => {
        console.log('email cambio');
    },[email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
         <h1>useEffect</h1>
         <hr/>

         <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />
         </div>
         
         <div className="form-group">
            <input 
                type="email"
                name="email"
                className="form-control"
                placeholder="email@gamil.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />
         </div>

         { (name === '123') && <Message />}

        </>
    )
}
