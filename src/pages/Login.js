import React from "react";
import {loginDB} from "../redux/modules/userSlice"
import useInput from "../hooks/useInput";


const Login = () => {
    const [loginId, onChangeLoginId ] = useInput("")
    const [loginPassword, changeLoginPassword] = useInput("")


    //로그인 요청, 토큰 로컬스토리지 저장
    const loginAction = async () => {
        const userInfo = {
            userId:loginId,
            password:loginPassword
        }
        loginDB(userInfo)     
    }

    return(
        <>
        <div>
            <form>
                <div>
                    <label htmlFor="">아이디</label>
                    <input type="text" value={loginId} onChange={onChangeLoginId}/>
                </div>
                <div>
                    <label htmlFor="">비밀번호</label>
                    <input type="password" value={loginPassword} onChange={changeLoginPassword} />
                </div>
                <button type="button" onClick={loginAction}>로그인</button>
            </form>
        </div>
        </>
    )

}

export default Login