const Users = require("../db/users");

exports.getAllUsers = () => {
  return Users;
};
exports.updateUser = (id, requestBody) => {
  const user = Users.find((user) => user.id === id);
  if (!user) {
    return false;
  }
  user.firstName = requestBody.firstName;
  user.email = requestBody.email;
  return true;
};
exports.addUser = (requestBody) => {
  return Users.push(requestBody);
};
exports.getUserById = (id) => {
  const user = Users.find((user) => user.id === id);
  return user;
};
