console.log('Hola pinches perros');

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

// ----------------- (state, action)
const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }

    return state; // siempre se retorna el state
}

// no usar push con react
// el push muta el objeto

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo // estandar que se le llame payload
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);