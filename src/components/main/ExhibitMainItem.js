import React from 'react';
import { Link } from 'react-router-dom';

const ExhibitMainItem = ({post, id}) => {
    console.log(post)
    return (
        <Link to={`/detail/${id}`}>
            <ul>
            <li><img src={post.thumnailImg} alt={post.title}/></li> 
            <li>{post.title}</li> 
            <li>{post.subtitle}</li> 
            </ul>
        </Link>
    );
};

export default ExhibitMainItem;