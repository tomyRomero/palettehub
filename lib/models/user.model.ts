import mongoose from "mongoose";
import { nanoid } from 'nanoid';

const userSchema = new mongoose.Schema({
    id: { type: String, default: () => nanoid(), unique: true },
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: {type: Boolean, required:true , default: false},
    image: String,
}); 


const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;

