import mongoose from "mongoose"

// const userSchema = new mongoose.Schema(
//     {
//      username: String, 
//      email: String, 
//      isActive: Boolean   
//     }, {timestamps: true})

    // OR
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String, 
            require: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            min: [8, `Must be atleast 8 letters, got {VALUE}`],
            max: 12
        }
    },
    {timestamps: true}
    )

export const User = mongoose.model("User", userSchema);