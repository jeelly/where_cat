import React, { useEffect, useState, useCallback } from "react";
import Map from "../components/Map";
import useInput from "../hooks/useInput";
import axios from "axios";
// import {userEmail} from '../redux/modules/userSlice'

const Singup = () => {
  const [userId, onChangeUserId] = useInput("")
  const [nickName, onChangeNickName] = useInput("")
  const [password, onChangePassword] = useInput("")
  const [confirmPassword, onChangeConfirmPassword] = useInput("")
  const [phoneNum, onChangePhoneNum] = useInput("")
  const [user_email, onChangeEmail] = useInput("");
  const [authNumber, onChangeAuthNumber] = useInput("");


  const [authNum, setAuthNum] = useState(-1);
  const [emailAuthError, setEmailAuthError] = useState(false);


  //유저에게 인증 이메일 보내기! 요청과 동시에 유저에게 보낸 같은 인증번호를 authNum에 할당
  const emailCheck = async () => {
    axios
      .post("http://43.200.104.97/api/users/mail", { email: user_email })
      .then((res) => {
        if (!user_email) {
            console.log(user_email)
          return alert("이메일을 입력해주세요");
        }
        setAuthNum(res.data.authNum);
        console.log(res)
      })
      .catch((e)=>{console.log(e)})
  };

  //authNum에 할당된 번호와 유저가 입력한 인증번호 비교하기
  const AuthenticationCheck = () => {
    if (authNum === -1) {
      return alert("이메일 중복확인 버튼을 눌러주세요!");
    }
    if (authNum === authNumber) {
      return (alert("인증완료"), setEmailAuthError(false));
    }
    if (authNum !== authNumber) {
      setEmailAuthError(true);
    }
  };

  //회원가입 요청
  console.log(userId, nickName, password, confirmPassword, phoneNum, user_email, authNumber)



  return (
    <div>
      <form>
        <div>
          <label htmlFor="userId">아이디</label>
          <input type="text" value={userId} onChange={onChangeUserId} />
        </div>
        <div>
          <label htmlFor="nickName">닉네임</label>
          <input type="text" value={nickName} onChange={onChangeNickName} />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" value={password} onChange={onChangePassword}/>
        </div>

        <div>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input type="password" value={confirmPassword} onChange={onChangeConfirmPassword}/>
        </div>
        <div>
          <label htmlFor="phoneNum">휴대폰 번호</label>
          <input type="number" value={phoneNum} onChange={onChangePhoneNum}/>
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="text" value={user_email} onChange={onChangeEmail} />
          <button onClick={emailCheck} type="button">
            이메일 중복확인
          </button>
        </div>
        <div>
          <label htmlFor="authenticationNumber">인증번호입력</label>
          <input type="text" value={authNumber} onChange={onChangeAuthNumber} />
          <button onClick={AuthenticationCheck} type="button">
            인증번호확인
          </button>
          {emailAuthError && <div>인증번호가 맞지 않아 버림</div>}
        </div>
        <div>
          <label htmlFor="userLocation">우리동네</label>
          <input type="text"defaultValue="서신동" />
        </div>
        <div>
          <label htmlFor="favorability">우리동네 호감도</label>
          <input type="text" defaultValue={0} />
        </div>
        <button htmlFor="">가입하기</button>
      </form>
      
    </div>
  );
};

export default Singup;
