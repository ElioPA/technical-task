import { useState, useEffect } from 'react';
import fetchPosts from '../services/PostsService';
import Post from './Post';
import '../styles/PostsList.css'

const PostsList = ({ query, showResults }) => {

    const [posts, setPosts] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);



    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);

                const res = await fetchPosts(query, pageNumber);
                console.log(res.posts);
                setPosts(res.posts);
                showResults === 'favs' ?? setShowFavorites(true);
                
                setLoading(false);
                
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [query, pageNumber])


    const handleNextPage =() => {
        setPageNumber(prev => prev + 1);
    }    

    return (
        <div className="posts-list">
            <br />
            {posts.map(post => (
                <div key={post.objectID} className="post">
                    <Post post={post} showFavorites={showFavorites}/>
                </div>
            ))}
            <br /> 
            {loading ? 'Loading...' : <button onClick={handleNextPage}>NEXT PAGE</button>}
            
        </div>
    )
}

export default PostsList
