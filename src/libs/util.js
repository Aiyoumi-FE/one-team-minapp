function checkEmail(value) {
  let regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  return regEmail.test(value)
}

function checkPwd(value) {
    // let regPassword = /^[A-Za-z0-9]{8,16}$/
    let regPassword = /^(?=.*\d)(?=.*[A-Za-z]).{8,16}$/g
    return regPassword.test(value)
}

module.exports = {
  checkEmail,
  checkPwd
}
