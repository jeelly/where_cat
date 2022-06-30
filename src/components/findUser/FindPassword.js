import React from "react";
import useInput from "../../hooks/useInput";
import axios from "axios"


const FindPassword = () => {
    const [userEmail, onChangeUserEmail] = useInput('')
    const [userId, onChangeUserId] = useInput('')

    const FindPasswordAction = async () => {
        try{
            const {data} = await axios.post('http://43.200.21.225/api/users/findPass',{
                email: userEmail,
                userId
            })
            console.log(data)

        }catch(e){
            console.log(e)

        }

    }



    return(
        <div style={{padding:'50px', border:'2px solid',marginTop:'10px'}}>
            <div>비밀번호 찾기 컴포넌트(임시 비밀번호 이메일로 보냄)</div>
            <div>
                <div>
                    <p>등록한 이메일</p>
                    <input type="text" value={userEmail} onChange={onChangeUserEmail}/>
                </div>
                <div>
                    <p>등록한 아이디</p>
                    <input type="text" value={userId} onChange={onChangeUserId}/>
                </div>
                <button style={{marginTop:'20px'}} onClick={FindPasswordAction}>임시 비밀번호 보내주세요 버튼</button>
            </div>
        </div>
    )

}

export default FindPassword