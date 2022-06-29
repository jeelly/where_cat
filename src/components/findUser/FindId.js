import React from "react";
import axios from "axios"
import useInput from "../../hooks/useInput";


const FindId = () => {
    const [userEmail, onChangeUserEmail] = useInput("")

    const findIdAction = async () => {
        try{
            const { data } = await axios.post('http://43.200.21.225/api/users/findUserId',{email:userEmail})
            console.log(data)

        }catch(e){
            console.log(e.response.data.errorMessage)
        }

    }


    return(
        <div style={{padding:'50px', border:'2px solid'}}>
            <div>아이디를 찾는 컴포넌트</div>
            <div>
                <p>등록한 이메일</p>
                <input type="text" value={userEmail} onChange={onChangeUserEmail}/>
            </div>
            <button style={{marginTop:'20px'}} onClick={findIdAction}>아이디 알려주세요 버튼</button>
        </div>
    )

}

export default FindId