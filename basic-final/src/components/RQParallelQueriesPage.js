import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

// 참고 : https://react-query.tanstack.com/guides/parallel-queries

const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:4000/todos');
    return data;
};

const fetchFriends = async () => {
    const { data } = await axios.get('http://localhost:4000/friends');
    return data;
};

const ParallelQueriesPage = () => {
    // "Parallel" queries는 병렬로 실행되거나 동시성을 극대화하기 위해 실행되는 쿼리이다. 
    // 아래의 쿼리는 병렬로 실행된다. 
    const { data: todos } = useQuery('todos', fetchTodos);
    const { data: friends } = useQuery('friends', fetchFriends);

    return <div></div>;
};

export default ParallelQueriesPage;
