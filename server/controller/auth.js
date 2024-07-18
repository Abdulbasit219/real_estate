import { comparePassword, hashpassword } from "../helper/bcr_helper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

//registeration controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validation
    if (!name) {
      return res.send({
        message: "Name is required",
      });
    } else if (!email) {
      return res.send({
        message: "Email is required",
      });
    } else if (!password) {
      return res.send({
        message: "Password is required",
      });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already Registered with this email address",
      });
    }

    //password hashing
    const hashpass = await hashpassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashpass,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

//login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(403).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // check user with email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    //compare hash password
    const matchPass = await comparePassword(password, user.password);
    if (!matchPass) {
      return res.status(200).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    // jw token
    const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    //login success
    return res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
