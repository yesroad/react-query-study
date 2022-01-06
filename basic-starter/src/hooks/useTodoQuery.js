import axios from "axios"
import { useQuery } from "react-query"

const fetchTodo = async (todoId) => {
    const { data } = await axios.get(`http://localhost:4000/todos/${todoId}`)
    return data
}


export const useTodoQuery = (todoId) =>
    // useQuery의 첫 번째 인자는 query key이다. 기본적으로 React Query는 쿼리 키로 쿼리 캐싱을 관리한다. 쿼리에 데이터를 고유하게 설명하기 위해 추가 정보가 필요한 경우 배열을 사용하여 데이터를 설명할 수 있다.   
    // useQuery의 두 번째 인자는 promise를 리턴하는 query function이다. promise는 데이터를 반환하거나 오류를 발생시킨다.   
    useQuery(['todo', todoId], () => fetchTodo(todoId))


