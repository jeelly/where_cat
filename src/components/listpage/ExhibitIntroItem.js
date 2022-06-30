import React from 'react';

const ExhibitIntroItem = ({intro}) => {
    console.log('아이템',intro)
    return (
        <ul>
            <li>{intro.title}</li>
            <li>{intro.subtitle}</li>
            <li><img src={intro.thumnailImg} alt={intro.title}/></li>
            <li>{intro.content}</li>
            <li><img src={intro.imgURL} alt={intro.title}/></li>
            <li>{intro.nickName}</li>
            <li>{intro.userInfo}</li>
        </ul>
    );
};

export default ExhibitIntroItem;