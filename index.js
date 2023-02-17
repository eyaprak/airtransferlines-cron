import express from 'express';
const app = express();
import cron from 'node-cron'
import fetch from 'node-fetch'

app.get('/', (req, res) => {
    console.log("hi knk");
})
//0 */6
cron.schedule('* * * * *', async () => {
    await fetch('https://airtransferlines.herokuapp.com/api/updateKur');
    console.log("ok")
});

app.listen(5000, () => {
    console.log('listening on port 5000');
})