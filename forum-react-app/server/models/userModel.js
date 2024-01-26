import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                  // Use a regular expression for basic email format validation
                  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: "Invalid email format",
            },
        },
        password: {
            type: String,   
            required: true
        }
    },
    {
        timestamps: true
    }
);

//to prevent duplicate accounts
userSchema.index({ firstName: 1, lastName: 1, email: 1 }, { unique: true });

export const User = mongoose.model("User", userSchema);