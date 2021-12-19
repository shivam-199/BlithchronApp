function isEmail(email) {
  if (email.length === 0) {
    return false;
  }
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email);
}

function isEmpty(text) {
  if (text.length === 0) {
    return true;
  } else {
    return false;
  }
}

export default {
  isEmail,
  isEmpty,
};
