import React from 'react';
import { Link } from 'react-router-dom';
import ExhibitMainList from '../components/main/ExhibitMainList';
import ListPage from './ListPage';

const Main = () => {
    return (
        <>
            <ExhibitMainList main={true} />
            <br/>
            <Link to="/listPage">전시회 더보기</Link>
        </>
    );
};

export default Main;