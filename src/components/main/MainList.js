import React from 'react';
//redux
import { useDispatch, useSelector } from "react-redux";
import ListItem from './ListItem';

const MainList = () => {
    const posts = useSelector((state) => state.posts.list);
    console.log(posts)
    return (
        <div>
            {posts.map((post,idx) => (
                <ListItem post={post} key={idx} />
            ))}
        </div>
    );
};

export default MainList;