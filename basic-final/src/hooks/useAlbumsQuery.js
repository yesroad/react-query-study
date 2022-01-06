import axios from "axios";
import { useQuery } from "react-query";

const fetchAlbums = async () => {
    const { data } = await axios.get('http://localhost:4000/albums');
    return data
}

export const useAlbumsQuery = () => useQuery('albums', fetchAlbums, {
    enabled: false
})