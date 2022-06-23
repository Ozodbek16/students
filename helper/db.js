const url = 'mongodb+srv://Ozodbek16:q0w9e8r7@cluster0.yfxl3.mongodb.net/clothes'
const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(url, () => {
            console.log('MongoDB connected');
        })
    } catch (error) {
        console.log(error);
    }
}