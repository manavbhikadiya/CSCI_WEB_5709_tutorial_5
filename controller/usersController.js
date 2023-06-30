const UserService = require("../services/usersServices");
const uuid = require("uuid");

exports.getAllUsers = (req, res) => {
  try {
    const response = UserService.getAllUsers();
    if (!response || !response.length) {
      const errorMessage = {
        success: false,
        data: "Users not found!",
      };
      return res.json(errorMessage);
    }
    const responseMessage = {
      message: "Users retrieved",
      success: true,
      users: response,
    };
    res.json(responseMessage);
  } catch (error) {
    const errorMessage = {
      messahe: "Internal Server Error.",
      error: error,
    };
    res.status(500).send(errorMessage);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const isUpdated = UserService.updateUser(userId, req.body);
    if (!isUpdated) {
      const errorMessage = {
        success: false,
        data: "Incorrect Request",
      };
      return res.json(errorMessage);
    }
    const responseMessage = {
      message: "Users updated",
      success: true,
    };
    res.json(responseMessage);
  } catch (error) {
    const errorMessage = {
      messahe: "Internal Server Error.",
      error: error,
    };
    res.status(500).send(errorMessage);
  }
};

exports.addUser = async (req, res) => {
  try {
    const user = {
      id: uuid.v4(),
      email: req.body.email,
      firstName: req.body.firstName,
    };
    UserService.addUser(user);
    const responseMessage = {
      message: "Users added",
      success: true,
    };
    res.json(responseMessage);
  } catch (error) {
    const errorMessage = {
      messahe: "Internal Server Error.",
      error: error,
    };
    res.status(500).send(errorMessage);
  }
};

exports.getUserById = (req, res) => {
  try {
    const userId = req.params.id;
    const response = UserService.getUserById(userId);
    if (!response) {
      const errorMessage = {
        success: false,
        data: "User not found!",
      };
      return res.json(errorMessage);
    }
    const responseMessage = {
      success: true,
      user: response,
    };
    res.json(responseMessage);
  } catch (error) {
    const errorMessage = {
      messahe: "Internal Server Error.",
      error: error,
    };
    res.status(500).send(errorMessage);
  }
};
