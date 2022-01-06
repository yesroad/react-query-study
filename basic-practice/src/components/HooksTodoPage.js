import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const HooksToDoPage = () => {
	// TODO useEffect, useState Hook을 사용하여 서버에서 데이터 가져오기
	const [loading, setLoading] = useState(false);
	const [todos, setTodos] = useState(null);
	const [error, setError] = useState(false);

	const getList = useCallback(async () => {
		setLoading(true);
		try {
			const response = await axios.get('http://localhost:4000/todos');
			setTodos(response.data);
		} catch (e) {
			setError(e);
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		getList();
	}, [getList]);

	if (loading) return <div>로딩</div>;
	if (error) return <div>에러</div>;

	return (
		<>
			<h2>To Do</h2>
			{todos?.map((todo) => {
				return <div key={todo.id}>{todo.title}</div>;
			})}
		</>
	);
};

export default HooksToDoPage;
