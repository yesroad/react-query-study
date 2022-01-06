import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

// 참고 : https://react-query.tanstack.com/guides/queries

const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:4000/todos');
    return data
}

const addTodo = async (todo) => {
    return axios.post('http://localhost:4000/todos', todo);
}

export const useTodosQuery = () =>
    // useQuery의 첫 번째 인자는 query key이다. 기본적으로 React Query는 쿼리 키로 쿼리 캐싱을 관리한다. 쿼리에 데이터를 고유하게 설명하기 위해 추가 정보가 필요한 경우 배열을 사용하여 데이터를 설명할 수 있다.   
    // useQuery의 두 번째 인자는 promise를 리턴하는 query function이다. promise는 데이터를 반환하거나 오류를 발생시킨다.   
    useQuery('todos', fetchTodos);

// 참고 : https://react-query.tanstack.com/guides/mutations

export const useAddTodoQuery = () => {
    const queryClient = useQueryClient();
    return useMutation(addTodo, {
        // onSuccess: (data) => {
        /**
         * 방법 1 - Invalidation from Mutations
         * 추가의 네트워크 요청을 발생시킨다.
         * 참고 : https://react-query.tanstack.com/guides/invalidations-from-mutations
         */
        // queryClient.invalidateQueries('todos') 

        /**
         * 방법 2 - Updates from Mutation Responses
         * 서버의 객체를 업데이트 하는 등의 데이버 변이(mutations)를 처리할 때, 응답으로 새로운 개체가 자동으로 반환되는 것이 일반적이다. 
         * 이 때, 해당 항목에 대한 쿼리를 리셋하고 불필요하게 이미 가지고 있는 데이터에 대한 네트워크 요청을 낭비하는 대신, 
         * mutations 함수에 의해 반환된 개체를 활용하고 queryClient의 setQueryData 메소드를 사용하여 기존 쿼리를 새 데이터로 즉시 업데이트 할 수 있다.
         * 참고 : https://react-query.tanstack.com/guides/updates-from-mutation-responses
         */

        // queryClient.setQueryData('todos', (oldQueryData) => {
        //     return [...oldQueryData, data.data]
        // })
        // }
        /**
         * 방법 3 - Optimistic Updates
         * https://react-query.tanstack.com/guides/optimistic-updates
         */

        // onMutate: async (newTodo) => {
        //     await queryClient.cancelQueries('todos');

        //     const previousTodoData = queryClient.getQueryData('todos');

        //     queryClient.setQueryData('todos', (oldQueryData) => {
        //         return [...oldQueryData, { id: oldQueryData?.length + 1, ...newTodo }]
        //     })

        //     return {
        //         previousTodoData
        //     }

        // },
        // onError: (_error, _todo, context) => {
        //     queryClient.setQueryData('todos', context.previousTodoData)
        // },
        // onSettled: () => {
        //     queryClient.invalidateQueries('todos')
        // }
    });
}



