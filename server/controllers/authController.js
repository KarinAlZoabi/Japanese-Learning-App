const authService = require("../services/authService");
const env = require("../config/env");

const getCookieOptions = (rememberMe = false) => ({
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax",

  ...(rememberMe && {
    maxAge: env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
  }),
});
const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const { user, token } = await authService.registerUser({
      username,
      email,
      password,
    });

    res
      .cookie("token", token, getCookieOptions(false))
      .status(201)
      .json({
        success: true,
        message: "Registration successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          japaneseLevel: user.japaneseLevel,
        },
      });
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password, rememberMe = false } = req.body;

    const { user, token } = await authService.loginUser(
      email,
      password
    );

    res
      .cookie("token", token, getCookieOptions(rememberMe))
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          japaneseLevel: user.japaneseLevel,
        },
      });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
};

const getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

module.exports = {
    register,
    login,
    logout,
    getMe,
};