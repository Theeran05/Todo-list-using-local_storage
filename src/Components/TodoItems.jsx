import React from 'react'

export const TodoItems = ({ text, Iscompleted, toggleTask,id,delect }) => {
    return (
        <div className="flex justify-between items-center gap-2">
            <label className={`hover:bg-slate-200 flex-1 p-2 rounded-md cursor-pointer select-none ${Iscompleted ? "line-through" : ""}`} onClick={()=> toggleTask(id)}>{text}</label>
            <div>
                {
                    Iscompleted ? (
                        <svg className='hover:fill-red-700 cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" onClick={()=> delect(id)}  /></svg>
                        
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className='hover:fill-green-500 ' height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    )
                }
            </div>
        </div>
    )
}

