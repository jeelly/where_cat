import React from 'react';
//redux
import { useDispatch, useSelector } from "react-redux";
import ExhibitIntroItemInformationItem from './ExhibitInformationItem';

const ExhibitInformationList = ({id}) => {
    const post = useSelector((state) => state.post.exhibit);
    console.log("aa",id)
    return (
        <div>
            {post.filter((post)=> post.id === parseInt(id))
            .map((post,idx) => (
                <ExhibitIntroItemInformationItem information={post.information} key={idx}/>
            ))}
        </div>
    );
};

export default ExhibitInformationList;