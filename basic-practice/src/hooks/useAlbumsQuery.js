import axios from 'axios';
import { useQuery } from 'react-query';

const fetchAlbums = async () => {
	const { data } = await axios.get('http://localhost:4000/albums');
	return data;
};

export const useAlbumsQuery = () => {
	// TODO albums 데이터를 가져오고 쿼리가 자동으로 실행되지 않도록 설정하기
	return useQuery('album', fetchAlbums, {
		enabled: false,
	});
};
