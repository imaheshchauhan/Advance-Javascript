import  mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema( {
    email: {
        type: String,
        require: [true, 'Enter an email'],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Enter a password"],
        trim: true,
        min: [6, "your password should at least 6 charactes"]
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

export default mongoose.model('User', userSchema);