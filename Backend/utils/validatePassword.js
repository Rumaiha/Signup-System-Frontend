module.exports = function validatePassword(password) {
  const regex = /^[A-Z](?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
  return regex.test(password);
};