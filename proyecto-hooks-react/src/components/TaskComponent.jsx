import React from 'react'

export const TaskComponent = () => {

    const inicialState = [
        { id: 1, title: 'Explicar reducers', completed: false },
    ]

    const newTask = { id: 2, title: 'Hacer reducers', completed: false}

    const renameTask = { id: 1, title: 'Explicar y leer reducers', completed: true }

    const createTask = {
        type: '[Tasks] Agregar tarea',
        payload: newTask
    }

    const editTask = {
        type: '[Tasks] Editar tarea',
        payload: renameTask
    }

    const deleteTask = {
        type: '[Tasks] Eliminar tarea',

    }

    const clearTasks = {
        type: '[Tasks] Limpiar tareas',

    }

    const taskReducer = (state = inicialState, action = {}) => {
        switch (action.type) {
            case '[Tasks] Agregar tarea':
                return [...state, action.payload]

            case '[Tasks] Editar tarea':
                return state.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            ...action.payload
                        }
                    }
                    return task
                })

            case '[Tasks] Eliminar tarea':
                return state.filter(task => task.id !== action.payload.id)

            case '[Tasks] Limpiar tareas':
                return []

            default:
                return state
        }
    }

    console.log(taskReducer(inicialState, createTask));


    return (
        <>
            {/* {JSON.stringify(taskReducer(inicialState, createTask))} */}
        </>
    )
}