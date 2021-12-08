import {filterData} from '../helpers/filterData';

/**
 * This component makes the requests to the API
 */

const API_URL = 'https://hn.algolia.com/api/v1/search_by_date';

const fetchPosts = async (query, page) => {
    try {
        const response = await fetch(`${API_URL}?query=${query}&page=${page}`);
        const data = await response.json();
        const newData = filterData(data);
        return newData;
    } catch (error) {
        console.log(error);
    }
}

export default fetchPosts;