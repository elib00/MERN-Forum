import express from "express";
import { User } from "../models/userModel.js";

const UserRouter = express.Router();

//create a new user
UserRouter.post("/register", async (req, res) => {
    try{
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password     
        }

        const createdUser = await User.create(newUser);
        return res.status(201).send({
            success: true,
            data: createdUser,
            message: "User created successfully."
        });
        
    }catch(err){
        return res.status(500).send({
            success: false,
            message: err.message
        });
    }
});

//get the list of users
UserRouter.get("/getUsers", async (req, res) => {
    try{
        const usersData = await User.find({});
        return res.status(200).json({
            success: true, 
            length: usersData.length,
            data: usersData,
            message: "Users data fetched successfully."
        });

    }catch(err){
        return res.status(500).send({
            success: false,
            message: err.message
        });
    }
});

//find a user in the db, for logging in
UserRouter.post("/login", async (req, res) => {
    try {
        const emailToFind = req.body.email;
        const password = req.body.password;

        // list of users that have the same email used
        const usersList = await User.find({ email: emailToFind });

        if (usersList.length === 0) {
            return res.status(404).send({
                success: false,
                message: "User not found."
            });     
        }

        const user = usersList.find(user => user.password === password);

        if (user) {
            return res.status(200).send({
                success: true,
                data: user,
                message: "Login successful."
            });
        } else {
            return res.status(401).send({
                success: false,
                message: "Incorrect password."
            });
        }
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    }
});


export default UserRouter;