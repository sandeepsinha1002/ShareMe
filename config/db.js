const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
function DbConnect()
{
    mongoose.connect(process.env.MONGO_CONNECTION_URL,
    {
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    });
    const db = mongoose.connection;
    db.on('error',console.error.bind(console,'connection error'));
    db.once('open',()=>
    {
        console.log('DB connected')
    })
}

module.exports = DbConnect;
