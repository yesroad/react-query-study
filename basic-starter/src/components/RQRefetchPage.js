import React from 'react'
import { Link } from 'react-router-dom'
import { useAlbumsQuery } from '../hooks/useAlbumsQuery';

const RQRefetchPage = () => {
    const { data: albums, isLoading, isError, error, refetch } = useAlbumsQuery();

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>Albums</h2>
            <button onClick={refetch}>앨범 가져오기</button>
            {albums?.map((album) => {
                return <div key={album.id}>
                    <div>
                        <Link to={`${album.id}`}>{album.title}</Link>
                    </div>
                </div>;
            })}
        </>
    )
}

export default RQRefetchPage
