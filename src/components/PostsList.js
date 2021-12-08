import { useState, useEffect, useRef } from 'react';
import fetchPosts from '../services/PostsService';
import Post from './Post';
import '../styles/PostsList.css';

/**
 * This component shows a list of the posts that are in each query to the API
 *  
 */

const PostsList = ({ filter }) => {

    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [query, setQuery] = useState(filter);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function getData() {
            try {
                setLoading(false);

                setQuery(filter);
                const res = await fetchPosts(query, pageNumber);
                setPosts(prev => [...prev, ...res.posts]);

                setLoading(true);

            } catch (error) {
                console.log(error);
            }
            return () => {
                setPosts({});
            };
        }
        getData();
    }, [query, pageNumber])


    const ref = useRef()

    useEffect(() => {
        if (loading) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    handleNextPage();
                }
            }, { threshold: 1 })
            observer.observe(ref.current);
        }
    }, [loading])

    const handleNextPage = () => {
        setPageNumber(prev => prev + 1);
    }

    return (
        <div className="postslist" >
            {posts.map(post => (
                <Post key={post.objectID} post={post} />
            ))}
            <div ref={ref}></div>
        </div>
    )
}

export default PostsList