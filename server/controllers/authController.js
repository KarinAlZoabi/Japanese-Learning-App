const authService = require("../services/authService");
const env = require("../config/env");

const cookieOptions = {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
};

const register = async (req, res, next) => {
    try {
        const { user, token } = await authService.registerUser(req.body);

        res
            .cookie("token", token, cookieOptions)
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
        const { email, password } = req.body;

        const { user, token } =
            await authService.loginUser(email, password);

        res
            .cookie("token", token, cookieOptions)
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
        .clearCookie("token")
        .json({
            success: true,
            message: "Logged out successfully",
        });
};

module.exports = {
    register,
    login,
    logout,
};