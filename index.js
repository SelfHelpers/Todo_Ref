const app = require('express')();
const mongoose = require('mongoose');

const PORT = 3000;
const uri = 'mongodb+srv://AmitRaj:AmitRaj123@cluster0.yog8h5r.mongodb.net/test';


const taskRoutes = require('./routes/tasks.js');



app.get('/', (req, res) => {
    res.json({ message: "Home" });
})

app.get('/test', (req, res) => {
    res.json({ message: "test" });
})

app.use('/tasks', taskRoutes);


mongoose.connect(uri).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });
}).catch((err) => {
    console.log(err);
})

