import React from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';

// 참고 : https://react-query.tanstack.com/guides/parallel-queries

const fetchTodo = async (todoId) => {
    const { data } = axios.get(`http://localhost:4000/todos/${todoId}`);
    return data
};

const DynamicParallelQueriesPage = ({ todoIds }) => {
    // React Query는 원하는 만큼의 쿼리를 병렬로 동적으로 실행할 수 있는 useQueries훅을 제공한다. useQueries는 쿼리 옵션 객체 배열을 인자로 받고 쿼리 결과 배열을 반환한다. 

    const queryResults = useQueries(
        todoIds.map((id) => {
            return {
                queryKey: ['todo', id],
                queryFn: () => fetchTodo(id),
            };
        })
    );

    console.log(queryResults)
    return <div></div>;
};

export default DynamicParallelQueriesPage;
