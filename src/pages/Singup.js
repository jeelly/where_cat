import React, { useCallback, useRef, useState } from "react";
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
} from "../shared/common";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import axios from "axios";
import { signupDB } from "../redux/modules/userSlice";

const Signup = () => {
  const [userId, onChangeUserId] = useInput("");
  const [phoneNum, onChangePhoneNum] = useInput("");
  const [authNumber, onChangeAuthNumber] = useInput("");

  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [authNum, setAuthNum] = useState(-1);

  const [emailError, setEmailError] = useState(false);
  const [nickNameError, setNickNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [emailAuthError, setEmailAuthError] = useState(false);

  const passwordRef = useRef("");

  //이메일 벨리데이션
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
    if (!emailValidation(e.target.value)) {
      setEmailError(true);
    } else if (emailValidation(e.target.value)) {
      setEmailError(false);
    }
  }, []);

  //닉네임 벨리데이션
  const onChangeNickName = useCallback((e) => {
    setNickName(e.target.value);
    if (!nicknameValidation(e.target.value)) {
      setNickNameError(true);
    } else if (nicknameValidation(e.target.value)) {
      setNickNameError(false);
    }
  }, []);

  //비밀번호 벨리데이션
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    if (!passwordValidation(e.target.value)) {
      setPasswordError(true);
    } else if (passwordValidation(e.target.value)) {
      setPasswordError(false);
    }
  }, []);

  //비밀번호 확인 (일치여부)
  const onChangeConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value);
    if (passwordRef.current.value !== e.target.value) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  }, []);

  //유저에게 인증 이메일 보내기! 요청과 동시에 유저에게 보낸 같은 인증번호를 authNum에 할당
  const emailCheck = async () => {
    if (email === "") {
      return window.alert("이메일을 입력해주세요");
    }
    axios
      .post("http://43.200.21.225/api/users/mail", { email })
      .then((res) => {
        setAuthNum(res.data.authNum);
        alert("인증번호가 발급되었음");
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //authNum에 할당된 번호와 유저가 입력한 인증번호 비교하기
  const AuthenticationCheck = () => {
    if (!authNumber) {
      return alert("인증번호를 입력해주세요!");
    }
    if (authNum !== authNumber) {
      return (
        alert("서버가 보내준 인증번호가 아니란다")
      );
    }
    if(authNum === authNumber){
      return (alert("인증완료"), setEmailAuthError(true))
    }
  };

  //회원가입 요청
  const signupAction = async () => {
    if (
      !userId ||
      !nickName ||
      !password ||
      !confirmPassword ||
      !phoneNum ||
      !email
    ) {
      return alert("입력 다 해야돼요...");
    } else if (!emailAuthError) {
      return alert("이메일 인증....");
    }

    const userInfo = {
      userId,
      nickName,
      password,
      confirmPassword,
      phoneNum,
      email,
    };
    signupDB(userInfo);
    console.log(userInfo);
  };

  return (
    <>
      <form>
        <div>
          <label>userId </label>
          <input
            type="text"
            placeholder="3자이상 한영 숫자 가능, 특수문자 불가"
            onChange={onChangeUserId}
            value={userId}
          />
        </div>
        <div>
          <label>nickName </label>
          <input
            type="text"
            onChange={onChangeNickName}
            placeholder="3자이상 한/영/숫자 가능, 특수문자 불가"
          />
          {nickNameError && (
            <ErrorText>3자이상 한/영/숫자 가능, 특수문자 불가</ErrorText>
          )}
        </div>
        <div>
          <label>password </label>
          <input
            type="password"
            onChange={onChangePassword}
            placeholder="영어, 4~16글자, 특수문자 입력가능"
            ref={passwordRef}
          />
          {passwordError && (
            <ErrorText>영어, 4~16글자, 특수문자 입력가능</ErrorText>
          )}
        </div>
        <div>
          <label>confirmPassword </label>
          <input type="password" onChange={onChangeConfirmPassword} />
          {confirmPasswordError && (
            <ErrorText>비밀번호가 일치하지 않아요!</ErrorText>
          )}
        </div>
        <div>
          <label>phoneNum </label>
          <input
            type="text"
            placeholder="- 없이 숫자만 입력해주세요"
            onChange={onChangePhoneNum}
            value={phoneNum}
          />
        </div>
        <div>
          <label>email </label>
          <input type="text" onChange={onChangeEmail} />
          <button type="button" onClick={emailCheck}>
            이메일 인증
          </button>
          {emailError && <ErrorText>이메일 형식을 확인해주세요!</ErrorText>}
        </div>
        {authNum > 0 && (
          <div>
            <label>email인증번호 </label>
            <input type="text" onChange={onChangeAuthNumber} />
            <button type="button" onClick={AuthenticationCheck}>
              인증번호 확인
            </button>
          </div>
        )}
      </form>
      <button onClick={signupAction}>회원가입</button>
    </>
  );
};

const ErrorText = styled.p`
  color: red;
  margin: 0;
  padding: 0;
  font-size: 12px;
`;
export default Signup;
