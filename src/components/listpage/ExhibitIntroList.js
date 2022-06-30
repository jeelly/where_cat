import React from 'react';
//redux
import { useDispatch, useSelector } from "react-redux";
import InformationItem from './ExhibitInformationItem';
import ExhibitIntroItem from './ExhibitIntroItem';

const ExhibitIntroList = ({id}) => {
    const post = useSelector((state) => state.post.exhibit);
    console.log(post)
    return (
        <div>
            {post.filter((post)=> post.id === parseInt(id))
            .map((post,idx) => (
                // 나중에 키값 바꾸기
                <ExhibitIntroItem intro={post.intro} key={idx}/>
            ))}
        </div>
    );
};

export default ExhibitIntroList;