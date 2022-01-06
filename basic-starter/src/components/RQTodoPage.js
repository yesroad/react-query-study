import React from 'react'
import { useParams } from 'react-router'
import { useTodoQuery } from '../hooks/useTodoQuery';

const RQToDoPage = () => {
    const { todoId } = useParams();
    const { idLoading, data: todo, isError, error } = useTodoQuery(todoId);

    if (idLoading) {
        return <h2>Loading... </h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <div>
            {todo?.title} - {todo?.completed ? "완" : "미완"}
        </div>
    )
}

export default RQToDoPage
