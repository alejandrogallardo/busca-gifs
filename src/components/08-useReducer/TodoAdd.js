import React from 'react'
import {useForm} from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        // Si viene vacio que no haga nada
        if ( description.trim().length <= 1 ){
            return;
        }

        //console.log('Nueva tarea')
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        // const action = {
        //     type: 'add',
        //     payload: newTodo
        // }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
          <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Agregar lista por hacer"
                    autoComplete="off"
                    className="form-control" 
                    onChange={handleInputChange}
                    value={description}
                />
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>  
        </>
    )
}
