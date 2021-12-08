/** 
 * Method that will help us filter the data we get from the API
*/

export const filterData = (data) => {
    const { hits, page, nbPages } = data;
    const validPosts = hits.filter(post => (post.author && post.story_title && post.story_url && post.created_at) != null);
    const postWithFav = validPosts.map(post => ({...post, isFavorite: false}));
    const filteredData = {
        posts: postWithFav,
        page: page,
        numPages: nbPages
    }
    return filteredData;
}
