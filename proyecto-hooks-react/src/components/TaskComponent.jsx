import React, { useReducer } from 'react'
import { useForm } from '../hooks/useForm';

export const TaskComponent = () => {

    const inicialState = [
        { id: 1, title: 'Explicar reducers', completed: false },
    ]

    const taskReducer = (state = inicialState, action = {}) => {
        switch (action.type) {
            case '[Tasks] Agregar tarea':
                return [...state, action.payload]

            case '[Tasks] Finalizar tarea':
                return state.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    } else return task
                })

            case '[Tasks] Eliminar tarea':
                return state.filter(task => task.id !== action.payload)

            case '[Tasks] Limpiar tareas':
                return []

            default:
                state
        }
        return state
    }

    // console.log(taskReducer(inicialState, createTask));

    const addTask = (e) => {
        e.preventDefault();
        if(formState.task == '') return
        const newTask = {
            id: new Date().getTime(),
            title: formState.task,
            completed: false
        };
        const action = {
            type: '[Tasks] Agregar tarea',
            payload: newTask
        }
        dispatch(action);
    }

    const endTask = (id) => {
        console.log(id)
        const action = {
            type: '[Tasks] Finalizar tarea',
            payload: id
        }
        dispatch(action);
        console.log(state)
    }

    const deleteTask = (id) => {
        const action = {
            type: '[Tasks] Eliminar tarea',
            payload: id
        }
        dispatch(action);
    }

    const deleteAll = () => {
        const action = {
            type: '[Tasks] Limpiar tareas'
        }
        dispatch(action);
    }


    const { formState, onInputChange } = useForm({ task: '' })
    const [state, dispatch] = useReducer(taskReducer, inicialState)

    return (
        <>
            <form onSubmit={addTask}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Agregar nueva tarea</label>
                    <input type="text" className="form-control" id="task" name='task' onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Enviar Tarea</button>
                <button type='button' className="btn btn-warning m-2" onClick={deleteAll}>Limpiar Tareas</button>
            </form>
            <hr />

            <ul className='list-group'>
                {state.map(task => {
                    return (
                        <li className='list-group-item d-flex justify-content-between align-items-center'
                            key={task.id}>
                            <span>{task.title}</span>
                            <div>
                                <input type="checkbox" value={task.completed} onChange={() => endTask(task.id)} />
                                <button className="btn btn-danger m-2" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
                            </div>
                        </li>
                    )

                })}
            </ul>
        </>
    )
}