const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_TEST_URL);
    
    }
    catch (err) {
        console.log(err.message);
    }
}

const clearDatabase = async () => {
    try {
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany({});
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

const closeConnection = async () => {
    try {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    }
    catch (err) {
        console.log(err.message);
    }
}


module.exports = { connectDB, clearDatabase, closeConnection }