/** Método que nos ayudará a filtrar los datos que obtenemos de la API*/

export const filterData = (data) => {
    const { hits, page, nbPages } = data;
    console.log('HELPER antes de filtrar: ',hits, page, nbPages);
    const validPosts = hits.filter(post => (post.author && post.story_title && post.story_url && post.created_at) != null);
    const postWithFav = validPosts.map(post => ({...post, isFavorite: false}));
    const filteredData = {
        posts: postWithFav,
        page: page,
        numPages: nbPages
    }
    console.log('HELPER despues de filtrar: ',filteredData.posts, filteredData.page, filteredData.numPages);
    return filteredData;
}
