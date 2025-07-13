module.exports = function validateAge(dob) {
  const age = Math.floor((Date.now() - new Date(dob)) / (365.25 * 24 * 60 * 60 * 1000));
  return age > 15;
};