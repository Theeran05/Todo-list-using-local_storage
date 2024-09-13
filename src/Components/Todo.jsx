import React, { useEffect, useRef, useState } from 'react'
import { TodoItems } from './TodoItems'

export const Todo = () => {

    const [TodoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")):[])
    const inputref = useRef()

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(TodoList));
    }, [TodoList])

    const addtask = () => {
        const inputtext = inputref.current.value.trim()
        if (inputtext === "") {
            return null
        }

        const newTodo = {
            id: Date.now(),
            task: inputtext,
            Iscompleted: false
        }

        setTodoList((pre) => [...pre, newTodo])
        inputref.current.value = ""
    };

    const toogleTask = (id) => {
        setTodoList((prev) => {
            return prev.map((todo) => {
                if (id === todo.id) {
                    return { ...todo, Iscompleted: !todo.Iscompleted }
                } else {
                    return todo
                }
            })
        })
    }

    const delectTask = (id) => {
        setTodoList(
            (prev) => {
                return prev.filter((todo) => todo.id !== id)
            }
        )
    }


    return (
        <>
            <div className='w-[30rem]'>
                <h1 className='text-lg my-2 font-medium text-amber-500 '>Todo List</h1>
                <div className='flex gap-2'>
                    <div className='flex-1'>
                        <input type="text" placeholder='Enter the task' className='px-4 py-3 w-full text-sm border focus:outline-none focus:border-amber-500' ref={inputref} />
                    </div>
                    <button className='py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium rounded-sm border-none' onClick={addtask} >ADD Task</button>
                </div>
                <p className='my-3 text-sm text-zinc-400 px-1'>Fill task details</p>
                <div className='w-[30rem] bg-white shadow py-6 px-4'>
                    <fieldset>
                        <legend className='text-pink-400 font-medium'>List of task</legend>
                        {TodoList.length === 0 ? (<p className='text-gray-400 text-sm py-2'>No Task found</p>) : (
                            TodoList.map((todo, index) => {
                                return <TodoItems text={todo.task} Iscompleted={todo.Iscompleted} id={todo.id} toggleTask={toogleTask} delect={delectTask} />
                            })
                        )}

                    </fieldset>
                </div>
            </div>
        </>
    )
}
