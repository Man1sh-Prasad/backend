import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    description: {
        required: true, 
        type: String
    },
    name: {
        type: String,
        required: true
    },
    productImage: {
       type: String,        // url of the image from a cloud, etc
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);