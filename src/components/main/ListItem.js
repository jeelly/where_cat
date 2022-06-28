import React from 'react';

const ListItem = ({post}) => {
    console.log('아이템',post)
    return (
        <ul>
            <li>누구냥 : {post.catName}</li>
            <li>아프냥 : {post.healthStatus}</li>
            {/* <li>{post.imageUrl[0]}</li> */}
        </ul>
    );
};

export default ListItem;