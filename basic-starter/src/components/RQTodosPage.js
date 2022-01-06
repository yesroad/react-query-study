import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAddTodoQuery, useTodosQuery } from '../hooks/useTodosQuery'

const RQTodoPage = () => {
    const [title, setTitle] = useState('')

    const { data: todos, isLoading, isError, error } = useTodosQuery();
    const { mutate: addTodo } = useAddTodoQuery();

    const onAddTodo = () => {
        addTodo({ title })
    }

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }
    return (
        <>
            <h2>To Do</h2>
            <input type='text' value={title} placeholder='할 일을 추가해주세요' onChange={e => setTitle(e.target.value)} />
            <button type='submit' onClick={onAddTodo}>추가</button>
            {todos?.map((todo) => {
                return <div key={todo.id}>
                    <div>
                        <Link to={`${todo.id}`}>{todo.title}</Link>
                    </div>
                    <div>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>

                </div>;
            })}
        </>
    )
}

export default RQTodoPage
