const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
        
    // another way to do it
    // mongoose.connect(db, {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false
    // })
    // .then(() => console.log('MongoDB Connected'))
    // .catch(err => {
    //     console.error(err.message);
    //     process.exit(1);
    // })
}

module.exports = connectDB;