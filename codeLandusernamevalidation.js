function CodelandUsernameValidation(str) {
    return /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/.test(str) ? true : false;
  }
  
  
  console.log(CodelandUsernameValidation("aa_")); // false
  console.log(CodelandUsernameValidation("u__hello_world123")); // true

  module.exports = CodelandUsernameValidation