import React from 'react';
import { useParams } from 'react-router-dom';
import ExhibitInformationItem from '../components/listpage/ExhibitInformationItem';
import ExhibitIntroList from '../components/listpage/ExhibitIntroList';
import { useDispatch, useSelector } from "react-redux";
import ExhibitIntroItem from '../components/listpage/ExhibitIntroItem';
import ExhibitInformationList from '../components/listpage/ExhibitInformationList';
const Detail = () => {
    const { id } = useParams();
    // const posts = useSelector((state) => state.post.exhibit);
    // const post = posts.filter((post, l) => post.id === parseInt(id))
    // const new_post = [];
    // new_post.push(...post)
    // console.log(...post)
    return (
        <>
            {/*
            <ul>
                <li>{post[0]?.intro.title}</li>
                <li>{post[0]?.intro.subtitle}</li>
                <li><img src={post[0]?.intro.thumnailImg} alt={post[0]?.intro.title}/></li>
                <li>{post[0]?.intro.content}</li>
                <li><img src={post[0]?.intro.imgURL} alt={post[0]?.intro.title}/></li>
                <li>{post[0]?.intro.nickName}</li>
                <li>{post[0]?.intro.userInfo}</li>
            </ul>
            
            <ul>
                <li>{post[0]?.information.title}</li> 
                <li>{post[0]?.information.subtitle}</li> 
                <li>{post[0]?.information.startData}</li> 
                <li>{post[0]?.information.endData}</li> 
                <li>{post[0]?.information.address}</li> 
                <li>{post[0]?.information.subInfo}</li> 
                <li>{post[0]?.information.openingHours}</li> 
                <li>{post[0]?.information.phoneNum}</li> 
                <li>{post[0]?.information.siteURL}</li> 
            </ul> */}
            <h1>전시-소개</h1>
            <ExhibitIntroList id={id}/>
            <h1>전시-안내</h1>
            <ExhibitInformationList id={id}/>
        </>
    );
};

export default Detail;