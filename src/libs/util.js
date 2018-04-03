export const checkEmail = (value) => {
    let regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    return regEmail.test(value)
}

export const checkPwd = (value) => {
    // let regPassword = /^[A-Za-z0-9]{8,16}$/
    let regPassword = /^(?=.*\d)(?=.*[A-Za-z]).{6,12}$/g
    return regPassword.test(value)
}

export const checkName = (value) => {
    return /^[\u4e00-\u9fa5A-Za-z0-9-_]{2,12}$/.test(value)
}
