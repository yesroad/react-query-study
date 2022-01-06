import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// 참고 : https://react-query.tanstack.com/guides/dependent-queries

const fetchPhotoById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/photos/${id}`);
  return data;
};

const fetchAlbumById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/albums/${id}`);
  return data;
};


const DependentQueriesPage = () => {
  // 종속(또는 직렬) 쿼리는 실행하기 전에 이전 쿼리의 완료 여부에 의존한다.
  const { data: photo } = useQuery(['photo', 1], () =>
    fetchPhotoById(1)
  );

  const albumId = photo?.albumId;

  const { data: album } = useQuery(['album', albumId], () => fetchAlbumById(albumId), {
    // albumId가 존재하기 전까지 이 쿼리는 실행되지 않는다.
    enabled: !!albumId,
  });
  return <div>
    <div>사진 제목: {photo?.title}</div>
    <div>앨범 제목: {album?.title} </div>
  </div>;
};

export default DependentQueriesPage;
