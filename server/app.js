const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const env = require("./config/env");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
    cors({
        origin: env.CLIENT_URL,
        credentials: true,
    })
);

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// Logger
app.use(morgan("dev"));

// Health Check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Japanese Learning API Running",
    });
});

// API Routes
app.use("/api/auth", authRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;