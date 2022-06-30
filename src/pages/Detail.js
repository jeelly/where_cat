import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ExhibitIntroList from '../components/listpage/ExhibitIntroList';
import ExhibitInformationList from '../components/listpage/ExhibitInformationList';
import '../css/detail.css'
// const Detail = () => {
//     const { id } = useParams();
//     const [tab, setTab] = useState(<ExhibitIntroList id={id}/>)
//     console.log(tab)
//     console.log(tab === <ExhibitIntroList id={id}/>)
//     console.log(tab === <ExhibitIntroList id={id}/>)

//     return (
//         <>
//             <button className={tab===<ExhibitIntroList id={id}/> ? "is-active" : ""}  onClick={()=> {
//                 setTab(<ExhibitIntroList id={id}/>)
//             }}>
//                 <h1>전시-소개</h1> 
//             </button>
//             <button className={tab===<ExhibitIntroList id={id}/> ? "is-active" : ""}  onClick={()=> {
//                 setTab(<ExhibitInformationList id={id}/>)
//             }}>
//                 <h1>전시-안내</h1>
//             </button>
//             {tab}
//         </>
//     );
// };

const Detail = () => {
    const { id } = useParams();
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index)
    }

    const tabContArr=[
        {
            tabTitle:(
                <button className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}>전시-소개</button>
            ),
            tabCont:(
                <ExhibitIntroList id={id}/>
            )
        },
        {
            tabTitle:(
                <button className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>전시-안내</button>
            ),
            tabCont:(
                <ExhibitInformationList id={id}/>
            )
        }
    ];
    

    return (<>
        <ul className="tabs is-boxed">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
        </ul>
        <div>
	    { tabContArr[activeIndex].tabCont }
        </div>
    </>)
}
export default Detail;