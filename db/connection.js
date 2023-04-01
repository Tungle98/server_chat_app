const mongoose = require('mongoose')

const url = 'mongodb+srv://chat_app_admin:3LAXsv1k07K4sHUZ@cluster0.5v20ddp.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log('connected to db')).catch((e)=>console.log('err connect db',e))