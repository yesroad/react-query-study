import { useState, useEffect } from 'react';
import axios from 'axios';

const HooksToDoPage = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:4000/todos')
            setTodos(result.data);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <>
            <h2>To Do</h2>
            {todos.map((todo) => {
                return <div key={todo.id}>{todo.title}</div>;
            })}
        </>
    )
}

export default HooksToDoPage
