import { IconButton } from '@mui/material';
import { AccessTime, Favorite } from '@mui/icons-material';
import { useState } from 'react';
import { format } from 'timeago.js';
import '../styles/Post.css';

/**
 * 
 * This component is used to create the layout of the post.
 */

const Post = ({ post = {}}) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = (event) => {
        setIsFavorite(!isFavorite);
        post.isFavorite = !isFavorite;
        if (localStorage.getItem('favs') != null) {

            let favs = JSON.parse(localStorage.getItem('favs'));
            favs = favs.filter(fav => fav.objectID !== post.objectID);

            if (post.isFavorite === true) {
                favs.push(post);
                localStorage.setItem('favs', JSON.stringify(favs));
            } else {
                localStorage.setItem('favs', JSON.stringify(favs));
            }
        } else {
            localStorage.setItem('favs', JSON.stringify([post]));
        }
    }

    return (
        <div className="card">
            <div className="card__texts">
                <p className="p1"><AccessTime fontSize="small" />{`${format(post.created_at)} by ${post.author}`}</p>
                <p className="p2">{post.story_title}</p>
            </div>
            <div className="card__icon">
                <IconButton onClick={handleClick}>
                    <Favorite color={isFavorite ? 'error' : 'disabled'} fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default Post