import React, { useEffect } from 'react'
import './style.css';
import { useReducer } from 'react';
import {todoReducer} from './todoReducer'
//import {useForm} from '../../hooks/useForm'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender react',
//     done: false
// }]

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender react',
    //     done: false
    // }]

    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    // el dispatch dispara las accines al state
    // const [state, dispatch] = useReducer(reducer, initialState, init);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {
        console.log(todoId);

        // Crear accion
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);

    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }
    
    const handleAddTodo = (newTodo) => {
            
        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    //console.log(description);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Si viene vacio que no haga nada
    //     if ( description.trim().length <= 1 ){
    //         return;
    //     }

    //     console.log('Nueva tarea')
    //     const newTodo = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         done: false
    //     }

    //     const action = {
    //         type: 'add',
    //         payload: newTodo
    //     }

    //     dispatch(action)
    //     reset()
    // }

    return (
        <div>
            <h1>Todo App ( {todos.length} )</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />                    
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
