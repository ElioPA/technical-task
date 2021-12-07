import {filterData} from '../helpers/filterData';

const API_URL = 'https://hn.algolia.com/api/v1/search_by_date';

const fetchPosts = async (query, page) => {
    try {
        const response = await fetch(`${API_URL}?query=${query}&page=${page}`);
        const data = await response.json();
        console.log('FETCH: ',data);
        const newData = filterData(data);
        console.log('FETCH new data: ',newData);
        return newData;
    } catch (error) {
        console.log(error);
    }
}

export default fetchPosts;