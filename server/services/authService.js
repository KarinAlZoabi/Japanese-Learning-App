const User = require("../models/User");
const generateToken = require("../utils/generateToken");



const registerUser = async(data)=>{


    const {
        username,
        email,
        password
    } = data;



    const existingUser =
        await User.findOne({
            $or:[
                {email},
                {username}
            ]
        });



    if(existingUser)
    {
        throw new Error(
            "User already exists"
        );
    }



    const user =
        await User.create({
            username,
            email,
            password
        });



    const token =
        generateToken(user._id);



    return {
        user,
        token
    };

};





const loginUser = async(email,password)=>{


    const user =
        await User.findOne({
            email
        })
        .select("+password");



    if(!user)
    {
        throw new Error(
            "Invalid credentials"
        );
    }



    const isMatch =
        await user.comparePassword(password);



    if(!isMatch)
    {
        throw new Error(
            "Invalid credentials"
        );
    }



    const token =
        generateToken(user._id);



    return {
        user,
        token
    };

};





module.exports =
{
    registerUser,
    loginUser
};