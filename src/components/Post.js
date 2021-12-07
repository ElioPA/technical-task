import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

import '../styles/Post.css'

const Post = ({ post, showFavorites }) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = (event) => {
        setIsFavorite(!isFavorite);
        post.isFavorite = !isFavorite;
        console.log(post)    
    }
    
    console.log('STATE: ',isFavorite)   
    console.log('POST: ',post.isFavorite);

    return (
        <>
            <div>
                <p>{`${post.created_at} by ${post.author}`}</p>
                <p>{post.story_title}</p>
            </div>
            <div className="like">
                <IconButton onClick={handleClick}>
                    <FavoriteIcon color={isFavorite ? 'error' : 'disabled'} fontSize="large" />
                </IconButton>
            </div>
        </>
    )
}

export default Post
