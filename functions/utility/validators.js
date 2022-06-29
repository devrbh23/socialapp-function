const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = string => {
  console.log(string);
  if (string.trim() === '') return true;
  else return false;
};

exports.validateSignUpData = data => {
  let errors = {};
  if (isEmpty(data.email)) {
    errors.email = 'email is not should be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'must be valid email';
  }
  if (isEmpty(data.password)) errors.password = 'must not be empty';
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'password not match';
  if (isEmpty(data.handle)) errors.handle = 'must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLogInData = data => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = 'must not be empty';
  if (isEmpty(data.password)) errors.password = 'must not be empty';
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
