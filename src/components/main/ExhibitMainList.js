import React from 'react';
//redux
import { useSelector } from "react-redux";
import ExhibitMainItem from './ExhibitMainItem';


const ExhibitMainList = ({main}) => {
    const post = useSelector((state) => state.post.exhibit);
    console.log(main)

    return (
        <div>
            {post.filter((content,idx) => (main ? idx < 1 : true))
            .map((post,idx) => (
                // 나중에 키값 바꾸기
                <ExhibitMainItem post={post.intro} id={post.id} key={idx}/>
            ))}
        </div>
    );
};

export default ExhibitMainList;