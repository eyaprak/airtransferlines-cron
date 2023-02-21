import express from 'express';
const app = express();
import cron from 'node-cron'
import fetch from 'node-fetch'
import dotenv from 'dotenv';

dotenv.config();

app.get('/', (req, res) => {
    console.log("hi knk");
    res.end('hi');
})
//0 */30
cron.schedule('0 */5 * * *', async () => {
    await fetch('https://airtransferlines-cronserver.herokuapp.com/');
    console.log("Server is up and running")
});


cron.schedule('0 */6 * * *', async () => {
    await fetch('https://airtransferlines.herokuapp.com/api/updateKur');
    console.log("Data has been updated")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('listening on port 5000');
})