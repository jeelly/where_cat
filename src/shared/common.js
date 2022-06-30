//이메일 벨리데이션
export const emailValidation = (userEmail) => {
    const _reg = /^[0-9a-zA-Z]+@+[0-9a-zA-Z]+.+[a-zA-Z]$/

    return _reg.test(userEmail)
}

//비밀번호 벨리데이션
export const passwordValidation = (userPassword) => {
    const _reg = /^[ㄱ-ㅎ가-힣0-9a-zA-Z@$!%#?&]{4,10}$/

    return _reg.test(userPassword)
}

//닉네임 벨리데이션
export const nicknameValidation = (userNickname) => {
    const _reg = /^[ㄱ-ㅎ가-힣0-9a-zA-Z]{3,10}$/

    return _reg.test(userNickname)
}
