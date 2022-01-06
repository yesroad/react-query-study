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

  const photoId = 1;

  // TODO photoId를 가지고 photo 데이터 가져오기


  // TODO photo 데이터에서 albumId 가져오기


  // TODO 위의 albumId를 가지고 album 데이터 가져오기

  return <div>
    {/* <div>사진 제목: {photo?.title}</div>
    <div>앨범 제목: {album?.title} </div> */}
  </div>;
};

export default DependentQueriesPage;
